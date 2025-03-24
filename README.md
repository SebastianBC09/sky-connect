# SkyConnect Explorer ✈️

[![Next.js](https://img.shields.io/badge/Next.js-15-blue)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-cyan)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-4-yellow)](https://zustand-demo.pmnd.rs/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-brightgreen)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**SkyConnect Explorer** es una aplicación web moderna construida con **Next.js** (App Router), **Zustand** y **Tailwind CSS**, que consume la API de [AviationStack](https://aviationstack.com/) para mostrar información detallada de aeropuertos, ubicación, zona horaria, etc. Incluye modo oscuro, vistas responsive y animaciones avanzadas.

---

## Tabla de Contenidos

1. [Descripción del Proyecto](#-descripción-del-proyecto)
2. [Características Principales](#-características-principales)
3. [Estructura del Proyecto](#-estructura-del-proyecto)
4. [Tecnologías y Dependencias](#-tecnologías-y-dependencias)
5. [Configuración Local](#-configuración-local)
6. [Variables de Entorno (API Key)](#-variables-de-entorno-api-key)
7. [Scripts Disponibles](#-scripts-disponibles)
8. [Diagramas de Arquitectura](#-diagramas-de-arquitectura)
9. [Tests](#-tests)
10. [SSR vs ISR](#-ssr-vs-isr)
11. [Autor](#-autor)
12. [Licencia](#-licencia)

---

## 📝 Descripción del Proyecto

SkyConnect Explorer es un **front-end** que permite:

- Explorar aeropuertos y su información:
  - Códigos IATA/ICAO
  - Ubicación geográfica
  - Zona horaria y detalles de país
- Filtrar y paginar la lista de aeropuertos (paginación local con Zustand).
- Ver detalles del aeropuerto en páginas dinámicas (`/airport/[iata_code]`).
- Buscar aeropuertos usando una barra de búsqueda.
- Disfrutar de un **modo oscuro** y un diseño totalmente **responsive**.
- Animaciones fluidas y atractivas con **Framer Motion**.

Se construye sobre **Next.js** (App Router) y se integra con la [AviationStack API](https://aviationstack.com/) para obtener los datos de aeropuertos.

---

## ✨ Características Principales

- **Next.js 15** con App Router y TypeScript.
- **Zustand** para manejar estado global (lista de aeropuertos, paginación, búsqueda).
- **Tailwind CSS** para estilos responsivos y modo oscuro (`darkMode: 'class'`).
- **Framer Motion** para animaciones avanzadas en el layout y los componentes.
- **Tests** unitarios con **Jest** y **React Testing Library**.
- **Uso de la API** de [AviationStack](https://aviationstack.com/) con interceptores en Axios o fetch.
- **Responsive**: Ajustes de padding, layout y breakpoints para que luzca bien en 320px hasta pantallas de escritorio.

---

## 📁 Estructura del Proyecto

```
sky-connect/
├── app/
│   ├─ page.tsx                 # Home (Client Component)
│   ├─ airports/
│   │   └─ page.tsx             # Listado y paginación de aeropuertos
│   └─ airport/
│       └─ [iata_code]/
│           ├─ layout.tsx       # Layout para la vista de cada aeropuerto
│           └─ page.tsx         # Vista general o "General" del aeropuerto
├── components/
│   ├─ UI/
│   │   ├─ Layout.tsx           # Layout principal (animado con framer-motion)
│   │   ├─ SearchBar.tsx        # Barra de búsqueda con modo results o home
│   │   ├─ Navigation.tsx       # Barra de tabs para secciones
│   │   └─ ...
│   ├─ airport/
│   │   ├─ AirportCard.tsx      # Tarjeta de un aeropuerto
│   │   ├─ AirportMap.tsx       # Mapa (Leaflet) con ubicación
│   │   └─ BaseCard.tsx         # Card base con imagen lateral
│   └─ ...
├── hooks/
│   └─ useAirportsPage.tsx      # Lógica de fetch/paginación con Zustand
├── store/
│   └─ airportStore.ts          # Estado global (Zustand) para aeropuertos
├── types/
│   ├─ airport.ts               # Tipos para Airport
│   └─ ...
├── public/
│   ├─ images/
│   │   └─ airport.png          # Imagen de fondo
│   └─ ...
├── tests/                      # (Opcional) Archivos de test si no están junto a los componentes
├── jest.config.js
├── babel.config.js
├── tailwind.config.js
├── package.json
├── README.md
└── ...

```

---

## 🛠️ Tecnologías y Dependencias

| Dependencia | Versión | Descripción |
|-------------|---------|-------------|
| **Next.js** | 15 | Framework principal con App Router |
| **React** | 18+ | Biblioteca de UI |
| **TypeScript** | 5+ | Tipado estático |
| **Zustand** | 4+ | Manejo de estado global |
| **Tailwind CSS** | 4 | Framework de CSS utilitario |
| **Framer Motion** | 7+ | Animaciones declarativas |
| **Jest** | 29+ | Testing runner |
| **React Testing Library** | 13+ | Pruebas unitarias en React |
| **@testing-library/jest-dom** | 5+ | Extiende los matchers de Jest para el DOM |

---

## ⚙️ Configuración Local

1. **Clonar el repositorio**:

```bash
git clone https://github.com/tu-usuario/sky-connect.git
cd sky-connect
```

2. **Instalar dependencias**:

```bash
npm install
# o
yarn install
```

3. **Variables de entorno**:

Crea un archivo `.env.local` en la raíz:

```bash
AVIATIONSTACK_API_KEY=TU_API_KEY
AVIATIONSTACK_BASE_URL=https://api.aviationstack.com/v1
```

4. **Ejecutar en modo desarrollo**:

```bash
npm run dev
# o
yarn dev
```

5. **Abrir** [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🔑 Variables de Entorno (API Key)

Para **autorizar** peticiones a la [AviationStack API](https://aviationstack.com/):

1. Regístrate en AviationStack y obtén tu **API Key**.
2. Agrega `AVIATIONSTACK_API_KEY` y `AVIATIONSTACK_BASE_URL` en tu `.env.local`.
3. El store o interceptores usarán esta clave en cada petición.

---

## 📜 Scripts Disponibles

- **`npm run dev`**: Inicia el servidor de desarrollo en [http://localhost:3000](http://localhost:3000).
- **`npm run build`**: Genera la build de producción.
- **`npm run start`**: Inicia el servidor en modo producción.
- **`npm run test`**: Ejecuta los tests unitarios con Jest y React Testing Library.

---

## 📊 Diagramas de Arquitectura

### Arquitectura General

```mermaid
flowchart LR
    A[Usuario] --> B[Next.js App (App Router)]
    B -->|fetch /airports| C[Zustand Store]
    B -->|fetch /airports?search=...| D[AviationStack API]

    C --> B
    D --> B

    style A fill:#f9f9f9,stroke:#333,stroke-width:2px
    style B fill:#f1f5f9,stroke:#666,stroke-width:2px
    style C fill:#bae6fd,stroke:#0ea5e9,stroke-width:2px
    style D fill:#ffedd5,stroke:#f97316,stroke-width:2px
```

**Descripción**:
1. El **usuario** ingresa a la app.
2. **Next.js** (App Router) usa un **store** de Zustand para cachear la lista de aeropuertos.
3. Para datos frescos, se llama a la **AviationStack API** usando la clave `AVIATIONSTACK_API_KEY`.

### Flujo de Páginas

```mermaid
graph TD
    Home((Home)) --> /airports((Listado Aeropuertos))
    /airports((Listado Aeropuertos)) --> /airport/[iata]((Detalle Aeropuerto))
    /airport/[iata] --> /airport/[iata]/location((Ubicación))
    /airport/[iata] --> /airport/[iata]/timezone((Zona Horaria))
    /airport/[iata] --> /airport/[iata]/stats((Estadísticas))
```

---

## 🧪 Tests

Se usan **Jest** y **React Testing Library** para pruebas unitarias:

- **`SearchBar.test.tsx`**: Verifica la barra de búsqueda sin usar `data-testid`, en su lugar `getByPlaceholderText` y `getByRole`.

Para ejecutarlos:

```bash
npm run test
# o
yarn test
```

---

## ⚙️ SSR vs ISR

- **SSR**: Si necesitas datos **muy frescos** en cada request, configúralo con `fetch(..., { cache: 'no-store' })`.
- **ISR**: Si tu lista de aeropuertos cambia cada X tiempo, exporta `revalidate = X` en un Server Component.
- **Actual**: Este proyecto maneja fetch y paginación en **Client Components** (Zustand). Para SEO y performance, podrías migrar la lógica a un Server Component con `revalidate`.

---

## 👨‍💻 Autor

**Sebastian Ballen C** - *Frontend Developer*

* LinkedIn: [Sebastian B.](www.linkedin.com/in/sebastianballencastaneda-softwaredeveloper)
* Email: sebastian.ballenc@gmail.com

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

⭐️ **Si te resulta útil este proyecto, ¡no olvides darle una estrella en GitHub!** ⭐️
