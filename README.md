# 🎨 Galería p5.js · Proyectos de Khan Academy

Sitio web hecho con **HTML, CSS y JavaScript** que muestra cinco dibujos creados originalmente en Khan Academy, adaptados a código web estándar con la librería **p5.js**. Incluye además secciones teóricas sobre la etiqueta `<canvas>` y sobre los fundamentos de p5.js.

🔗 **Sitio publicado:** https://github.com/cruz1222/proyecto_graficaccion_dibujosconjs-y-p5

## 📁 Contenido del sitio

| Sección | Descripción |
|---|---|
| Inicio | Página principal con menú de navegación |
| Canvas | Explicación de `<canvas>` y su contexto de renderizado 2D |
| p5.js | Fundamentos de la librería: `setup()`, `draw()`, formas, color y modo instancia |
| Rana | Rana dibujada con elipses |
| Dientes de conejo | Conejo con orejas, ojos y dientes |
| ¿Qué hay de cena? | Plato con carne, papas fritas y chícharos |
| Día nevado soleado | Muñeco de nieve bajo el sol |
| Muñeco de nieve | Muñeco con brazos y cara |

## 🗂️ Estructura del repositorio

```
├── index.html     # Página principal, navegación y contenido teórico
├── style.css      # Estilos del sitio
├── sketches.js    # Código p5.js de los cinco dibujos
└── README.md      # Este archivo
```

## 🛠️ Tecnologías

- **HTML5** para la estructura de la página.
- **CSS3** para el diseño y la adaptación a pantallas pequeñas.
- **JavaScript** y **[p5.js](https://p5js.org/)** (v1.9.4, cargada desde cdnjs) para los dibujos.

## ▶️ Cómo ver el proyecto en tu computadora

1. Descarga o clona el repositorio:
   ```bash
   git clone https://github.com/TU-USUARIO/NOMBRE-DEL-REPOSITORIO.git
   ```
2. Abre el archivo `index.html` en tu navegador. Necesitas conexión a internet para que cargue p5.js.

## 🚀 Despliegue con GitHub Pages

1. Sube los archivos a un repositorio **público** en GitHub.
2. Ve a **Settings → Pages**.
3. En *Source* elige **Deploy from a branch**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda y espera uno o dos minutos. El sitio quedará disponible en la URL indicada arriba.

## 📝 Notas

- Los dibujos son adaptaciones de los proyectos originales de Khan Academy, que usa Processing.js, a p5.js estándar.
- Cada dibujo usa el **modo instancia** de p5.js para que los cinco convivan en la misma página.

## 👤 Autor

Proyecto realizado por **Cruz Angel Velazquez Guel** como tarea de programación.
