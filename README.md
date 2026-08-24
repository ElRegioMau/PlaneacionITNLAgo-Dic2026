# Planeación Docente · Agosto–Diciembre 2026

Sitio web para publicar la planeación semestral del Ing. Mauricio Alberto Alvarez Aspeitia.

## Stack

- React + TypeScript
- Vite
- React Router con `HashRouter` para compatibilidad sencilla con GitHub Pages
- CSS modular por área visual
- Datos académicos separados por materia en `src/data/courses/`
- Lucide React para iconografía

## Estructura

```text
src/
├── components/         # Componentes reutilizables
├── data/
│   ├── courses/        # Una planeación independiente por materia
│   ├── evaluation.ts
│   └── profile.ts
├── pages/              # Inicio y vista de materia
├── styles/             # Estilos globales, inicio y materias
├── types/              # Contratos TypeScript
├── App.tsx
└── main.tsx
```

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Construir versión de producción

```bash
npm run build
```

El resultado se genera en `dist/`.

## Publicar en GitHub Pages

El proyecto incluye `.github/workflows/deploy.yml`.

1. Crea un repositorio en GitHub.
2. Sube el proyecto a la rama `main`.
3. En GitHub abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **GitHub Actions**.
5. El workflow construirá y publicará automáticamente el sitio con cada push a `main`.

Se utiliza `base: './'` en Vite y `HashRouter`, por lo que no es necesario cambiar el nombre del repositorio en la configuración.

## Actualizar una materia

Cada materia vive en un archivo JSON independiente dentro de `src/data/courses`. Para agregar una materia nueva:

1. Copia la estructura de una materia existente.
2. Cambia `slug`, nombres, tecnologías y módulos.
3. Importa el archivo en `src/data/courses/index.ts`.

La navegación y las rutas se generan automáticamente desde ese arreglo.

## Evaluación

- 50% actividades semanales.
- 50% proyecto integrador de cada módulo.

Cada materia contiene 4 módulos, 16 semanas, 32 actividades y 4 proyectos.
