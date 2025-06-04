# Frontend Starter with Gulp

This project is a simple frontend boilerplate that uses Gulp to automate tasks like compiling SCSS, copying HTML files, and live reloading in the browser with BrowserSync.

## Features

- Compile SCSS to CSS
- Minify CSS
- Copy HTML files from `src` to `dist`
- Auto-replace image paths from `/images/...` to `../images/...` in compiled CSS
- Live reload with BrowserSync

## Folder Structure

project/
├── dist/              # Compiled output (generated)
├── node_modules/
├── src/
│   ├── images/        # Images (optional)
│   ├── scss/          # SCSS files
│   └── index.html     # HTML file
├── gulpfile.js
├── package.json
└── README.md

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

This will compile SCSS into dist/css/, copy HTML files to dist/, and start a local server at http://localhost:3000 with automatic reload on file changes.


## Notes

- SCSS files that reference images using /images/... will automatically be rewritten to ../images/... in the final CSS.
- Make sure image files are placed in src/images/. You can manually copy them to dist/images/ or create a Gulp task to do it automatically.

## To Do / Optional Enhancements

- Add a Gulp task to copy images from src/images/ to dist/images/
- Add error notifications or logging for missing files
- Add source maps for CSS in development
- Use gulp-imagemin to optimize images (PNG, JPG, SVG, etc.)
- Add support for JavaScript processing (e.g. with Babel or Webpack)
- Create a separate production build task with full optimization