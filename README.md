# TP2 — Landing Page "Sueños 3D"

Landing page promocional para el emprendimiento de impresión 3D **Sueños 3D**, diseñada con IA en Google Stitch y desarrollada con React y Tailwind CSS v4.

---

## 📌 1. Qué es el proyecto

El proyecto consiste en una landing page moderna, minimalista y responsive para un laboratorio de fabricación e impresión 3D. 

El sitio incluye:
- **Navbar**: Barra de navegación superior con marca y botón de acción.
- **Hero**: Presentación principal de la marca con llamadas a la acción.
- **Sección de Productos y Servicios**: Grilla interactiva que recorre un array de datos con `.map()`, mostrando tarjetas con badges condicionales de "Destacado" y eventos de consulta.
- **Footer**: Pie de página semántico con información de contacto y derechos reservados.

---

## 🛠️ 2. Cómo correrlo

### Requisitos previos
- Node.js instalado
- pnpm instalado

### Instrucciones de ejecución

1. Clonar el repositorio:
   ```bash
   git clone TU_URL_DE_GITHUB_AQUI
   cd tp2-landing-stich
   pnpm install
   pnpm dev
   ```

2. Abrir el navegador en: `http://localhost:5173/` 

## Declaración de Uso de IA
Se utilizó Google Stitch para generar el boceto y layout visual inicial mediante prompts iterativos. El diseño final fue exportado y conservado como evidencia en los archivos _design/landing.png y _design/landing.html.
El código JSX, la arquitectura de componentes (Navbar, Hero, FeatureSection, ProductCard, Footer), la desestructuración de props y el mapeo de datos fueron codificados y ajustados manualmente respetando las reglas de la consigna.

## Lo que me costó
Traducir el HTML de Stitch a componentes de React, adaptar la estructura estática exportada por la IA para crear componentes reutilizables sin copiar y pegar el código directamente en App.jsx.

