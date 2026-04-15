# Portfolio/Website

## [0.2.0] - 2025-04-15

### Added

- **Vue.js & Vite Migration**: Complete architectural overhaul from static HTML to a modern Vue 3 Single Page Application (SPA).
- **Global Shader Background**: Integrated `ShaderHero.vue`, a generative WebGL background using FBM (Fractal Brownian Motion) and noise functions to reflect graphics engineering expertise.
- **Dynamic Project Details**: Created `ProjectDetailView.vue` to provide deep dives into technical challenges, "Lessons Learned," and tech stacks for individual projects.
- **Centralized Data Management**: Introduced `src/data/projects.js` as a single source of truth for project metadata.
- **Reusable UI Components**:
  - `LineNumbers.vue`: Automates the code-editor aesthetic across all views.
  - `Navbar.vue`: Centralized navigation with active route detection.
- **Legal Compliance**: Added `ImpressumView.vue` and `PrivacyView.vue` to meet professional standards.
- **Interactive Skills**: Added hover-active skill tags in `SkillsView.vue` for better engagement.

### Changed

- **About Page Redesign**: Transformed the linear layout into a "Bento-box" grid, featuring a Polaroid-style profile card and an interactive terminal diagnostic log.
- **Education Timeline**: Refactored the education and career sections to be data-driven, allowing for easier updates and better consistency.
- **Unified UX**: Standardized header heights (25vh) across all pages and improved content spacing (margin-top fixes) for better readability.
- **Asset Pipeline**: Migrated images and assets to the Vite-standard `public` folder structure.

### Fixed

- **Z-Index & Navigation**: Resolved a critical issue where content-flow overshot the header, blocking navigation links.
- **Font Rendering**: Applied hardware acceleration (`translateZ`) and smoothing hacks to fix "krakelige" (aliased) text rendering on rotated sections.
- **Router Stability**: Fixed 404/MIME-type errors caused by missing Vue components during the initial migration phase.

### Removed

- Obsolete static HTML files in the `sites/` directory.
- Legacy `script.js` and manual line-numbering strings.

## [0.1.1] - 2025-03-13

### Added

- Introduced `EnvironmentGeneratorEditor` to enhance the user interface for terrain generation settings.

### Changed

- Added new project pictures (still need to be optimised).

### Fixed

- Fixed broken sites links.
