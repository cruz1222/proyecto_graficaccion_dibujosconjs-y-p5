# 🎨 Galería p5.js · Proyectos de Khan Academy

Sitio web hecho con **HTML, CSS y JavaScript** que muestra ocho proyectos creados originalmente en Khan Academy (cinco dibujos estáticos y tres animaciones), adaptados a código web estándar con la librería **p5.js**. Incluye además secciones teóricas sobre la etiqueta `<canvas>` y sobre los fundamentos de p5.js, y un **Inspector del DOM** que dibuja el árbol de etiquetas de cada página. El diseño tiene un estilo de **manuscrito antiguo** (pergamino, tinta sepia y detalles dorados).

🔗 **Sitio publicado:** https://github.com/cruz1222/proyecto_graficaccion_dibujosconjs-y-p5

## 📁 Contenido del sitio

| Sección | Descripción |
|---|---|
| Inicio | Página principal con menú de navegación |
| Canvas | Explicación de `<canvas>` y su contexto de renderizado 2D |
| p5.js | Fundamentos de la librería: `setup()`, `draw()`, formas, color y modo instancia |
| 1. Rana | Rana dibujada con elipses |
| 2. Dientes de conejo | Conejo con orejas, ojos y dientes |
| 3. ¿Qué hay de cena? | Plato con carne, papas fritas y chícharos |
| 4. Día nevado soleado | Muñeco de nieve bajo el sol |
| 5. Muñeco de nieve | Muñeco con brazos y cara |
| 6. El sol que explota | Animación: un sol que crece hasta llenar el cielo |
| 7. Nubes que se separan | Animación: dos nubes se alejan y revelan un sol creciente |
| 8. Estrella fugaz | Animación: noche con luna, estrellas parpadeantes, dos estrellas fugaces y una ciudad |
| Inspector DOM | Página aparte que muestra gráficamente el árbol DOM de `index.html` y `dom-inspector.html` |

## 🗂️ Estructura del repositorio

```
├── index.html          # Página principal, navegación y contenido teórico
├── dom-inspector.html  # Página del Inspector del árbol DOM
├── dom-inspector.js    # Lógica del inspector (lee el HTML y dibuja el árbol)
├── style.css           # Estilos del sitio (tema manuscrito antiguo)
├── sketches.js         # Código p5.js de los ocho dibujos
└── README.md           # Este archivo
```

## 🛠️ Tecnologías

- **HTML5** para la estructura de las páginas.
- **CSS3** para el diseño y la adaptación a pantallas pequeñas (fuentes Cinzel e IM Fell English desde Google Fonts).
- **JavaScript** y **[p5.js](https://p5js.org/)** (v1.9.4, cargada desde cdnjs) para los dibujos y animaciones.
- **DOMParser** y `fetch` para el Inspector del DOM.

## ▶️ Cómo ver el proyecto en tu computadora

1. Descarga o clona el repositorio:
   ```bash
   git clone https://github.com/cruz1222/proyecto_graficaccion_dibujosconjs-y-p5.git
   ```
2. Abre `index.html` en tu navegador. Necesitas conexión a internet para que carguen p5.js y las fuentes.
3. Para usar el **Inspector DOM** localmente necesitas un servidor, porque el navegador bloquea `fetch` sobre archivos abiertos directamente:
   ```bash
   python -m http.server
   ```
   y entra a `http://localhost:8000/dom-inspector.html`.

## 🚀 Despliegue con GitHub Pages

1. Sube los archivos a un repositorio **público** en GitHub.
2. Ve a **Settings → Pages**.
3. En *Source* elige **Deploy from a branch**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda y espera uno o dos minutos. El sitio quedará disponible en la URL que indique GitHub Pages.

## 📝 Notas

- Los dibujos son adaptaciones de los proyectos originales de Khan Academy, que usa Processing.js, a p5.js estándar.
- Cada dibujo usa el **modo instancia** de p5.js para que los ocho convivan en la misma página.
- Los cinco primeros son estáticos (`noLoop()`); los tres últimos se animan con `draw()`. En las animaciones del sol y de las nubes se agregó un reinicio automático para que se repitan.

## 👤 Autor

Proyecto realizado por **Cruz Angel Velazquez Guel** como tarea de programación.
