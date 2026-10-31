# Velvet BL — React + Atomic Design

## Estructura del proyecto
```text
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── pages/
│   └── Inicio.jsx
├── data/
│   └── historias.js
├── services/
│   └── historiasService.js
├── context/
│   └── FavoritosContext.jsx
├── utils/
│   └── busqueda.js
├── main.jsx
└── styles.css
```

## Para qué sirve cada carpeta
- `components/atoms`: elementos pequeños reutilizables, como botones, logo y etiquetas.
- `components/molecules`: grupos pequeños de átomos, como tarjeta, filtro y buscador.
- `components/organisms`: secciones grandes de la interfaz.
- `components/templates`: organiza los organismos en el diseño de página.
- `pages`: páginas completas de la aplicación; `Inicio.jsx` usa la plantilla principal.
- `data`: datos iniciales de ejemplo para las historias BL.
- `services`: funciones CRUD (crear, leer, actualizar y eliminar) de historias. Este ejemplo guarda cambios en `localStorage`; no usa un servidor ni una base de datos remota.
- `context`: estado compartido de favoritos para que varias tarjetas puedan acceder a él.
- `utils`: funciones auxiliares, como normalizar texto para que la búsqueda no dependa de mayúsculas ni tildes.

## Ejecutar
1. Abre esta carpeta en Visual Studio Code.
2. En la terminal ejecuta `npm install`.
3. Ejecuta `npm run dev`.
4. Abre la dirección local que indique Vite.

Las historias son ficticias y las portadas son decorativas. El formulario de comunidad es una demostración.
