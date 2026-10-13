// Inspector del DOM: lee el HTML de cada página del proyecto y dibuja su árbol.
const PAGINAS = ["index.html", "dom-inspector.html"];

const SEMANTICOS = ["header", "nav", "main", "section", "footer", "article", "aside"];
const CONTENIDO = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "a", "ul", "ol", "li", "pre", "code", "strong", "span", "button"];
const META = ["meta", "link", "title", "script", "style"];
const ATRIBUTOS = ["href", "src", "charset", "name", "lang", "rel", "width", "height"];

const arbolDiv = document.getElementById("arbol");
const statsDiv = document.getElementById("stats");
const pestanasDiv = document.getElementById("pestanas");
const cache = {};

function categoria(tag) {
  if (tag === "html") return "raiz";
  if (tag === "head" || tag === "body") return "estructura";
  if (tag === "canvas") return "canvas";
  if (SEMANTICOS.includes(tag)) return "semantico";
  if (META.includes(tag)) return "meta";
  if (CONTENIDO.includes(tag)) return "contenido";
  return "otro";
}

function recortar(txt, max) {
  return txt.length > max ? txt.slice(0, max) + "…" : txt;
}

// Convierte un elemento del DOM en un objeto simple
function leer(el) {
  const tag = el.tagName.toLowerCase();
  const hijos = [...el.children].map(leer);
  // p5.js crea el <canvas> al ejecutarse; el HTML solo trae el contenedor vacío
  if (el.classList.contains("lienzo") && !hijos.length) {
    hijos.push({ tag: "canvas", attrs: 'width="400" height="400"', texto: "lo crea p5.js al ejecutarse", hijos: [], virtual: true });
  }
  const partes = [];
  if (el.id) partes.push("#" + el.id);
  if (el.classList.length) partes.push("." + [...el.classList].join("."));
  ATRIBUTOS.forEach((a) => {
    const v = el.getAttribute(a);
    if (v !== null && v !== "") partes.push(a + '="' + recortar(v, 40) + '"');
  });
  const texto = ["script", "style"].includes(tag) ? "" :
    [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent.trim()).join(" ").trim();
  return { tag, attrs: partes.join(" "), texto: recortar(texto, 50), hijos };
}

function contar(n) { return 1 + n.hijos.reduce((s, h) => s + contar(h), 0); }
function profundidad(n) { return 1 + Math.max(0, ...n.hijos.map(profundidad)); }
function contarTag(n, tag) { return (n.tag === tag ? 1 : 0) + n.hijos.reduce((s, h) => s + contarTag(h, tag), 0); }

function crearNodo(n, nivel) {
  const li = document.createElement("li");
  const caja = document.createElement("div");
  caja.className = "nodo n-" + categoria(n.tag) + (n.virtual ? " virtual" : "");
  const tieneHijos = n.hijos.length > 0;

  const flecha = document.createElement("span");
  flecha.className = "flecha";
  caja.append(flecha);

  const tag = document.createElement("strong");
  tag.textContent = "<" + n.tag + ">";
  caja.append(tag);

  if (n.attrs) { const a = document.createElement("span"); a.className = "attrs"; a.textContent = n.attrs; caja.append(a); }
  if (n.texto) { const t = document.createElement("span"); t.className = "texto"; t.textContent = "“" + n.texto + "”"; caja.append(t); }
  li.append(caja);

  if (tieneHijos) {
    const ul = document.createElement("ul");
    n.hijos.forEach((h) => ul.append(crearNodo(h, nivel + 1)));
    li.append(ul);
    if (nivel >= 3) li.classList.add("cerrado");
    caja.classList.add("con-hijos");
    caja.addEventListener("click", () => li.classList.toggle("cerrado"));
  }
  return li;
}

function dibujar(raiz, nombre) {
  const ul = document.createElement("ul");
  ul.append(crearNodo(raiz, 0));
  arbolDiv.replaceChildren(ul);
  statsDiv.innerHTML =
    "<span><b>" + nombre + "</b></span>" +
    "<span>Etiquetas: <b>" + contar(raiz) + "</b></span>" +
    "<span>Profundidad: <b>" + profundidad(raiz) + "</b></span>" +
    "<span>&lt;canvas&gt;: <b>" + contarTag(raiz, "canvas") + "</b></span>" +
    "<span>&lt;section&gt;: <b>" + contarTag(raiz, "section") + "</b></span>";
}

async function mostrar(nombre) {
  [...pestanasDiv.children].forEach((b) => b.classList.toggle("activa", b.dataset.pagina === nombre));
  arbolDiv.textContent = "Cargando…";
  statsDiv.textContent = "";
  try {
    if (!cache[nombre]) {
      const resp = await fetch(nombre);
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      const doc = new DOMParser().parseFromString(await resp.text(), "text/html");
      cache[nombre] = leer(doc.documentElement);
    }
    dibujar(cache[nombre], nombre);
  } catch (e) {
    arbolDiv.innerHTML = '<p class="error">No se pudo leer <code>' + nombre + '</code>. ' +
      'Si abriste el archivo directamente desde tu computadora, el navegador bloquea la lectura: ' +
      'abre el sitio publicado en GitHub Pages o usa un servidor local (<code>python -m http.server</code>).</p>';
  }
}

PAGINAS.forEach((p, i) => {
  const b = document.createElement("button");
  b.textContent = p;
  b.dataset.pagina = p;
  b.addEventListener("click", () => mostrar(p));
  pestanasDiv.append(b);
});

document.getElementById("btn-expandir").addEventListener("click", () =>
  arbolDiv.querySelectorAll("li.cerrado").forEach((li) => li.classList.remove("cerrado")));
document.getElementById("btn-contraer").addEventListener("click", () =>
  arbolDiv.querySelectorAll("li").forEach((li, i) => { if (li.querySelector(":scope > ul") && i > 0) li.classList.add("cerrado"); }));

mostrar(PAGINAS[0]);
