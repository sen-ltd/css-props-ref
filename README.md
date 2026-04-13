# CSS Props Ref

CSS property reference with 72 properties and interactive live previews. Switch values and see results instantly.

**Live demo**: https://sen.ltd/portfolio/css-props-ref/

## Features

- **72 CSS properties** across 6 categories: Layout, Box Model, Typography, Color & Background, Effects, Transform & Animation
- **Live preview** for every property — select a value and see the result instantly
- **Search** by property name (with description matching)
- **Filter by category** with one-click category chips
- **Bilingual** — Japanese / English toggle
- **Dark / Light theme**
- Zero dependencies, no build step

## Categories

| Category | Properties |
|---|---|
| Layout | display, position, flex-direction, justify-content, align-items, gap, grid-template-columns, flex-wrap, overflow, z-index, top, left, right, bottom, visibility, aspect-ratio, object-fit, flex-grow, flex-shrink, align-self, order, grid-column, place-items |
| Box Model | margin, padding, border, border-radius, width, height, min-width, max-width, box-sizing, resize |
| Typography | font-family, font-size, font-weight, line-height, letter-spacing, text-align, text-decoration, text-transform, white-space, word-break, text-overflow, vertical-align, font-style, list-style |
| Color & Background | color, background-color, background-image, background-size, background-position, opacity, mix-blend-mode |
| Effects | box-shadow, filter, backdrop-filter, clip-path, cursor, user-select, pointer-events, appearance, scroll-behavior |
| Transform & Animation | transform, rotate, scale, translate, transition, animation, content, transform-origin, animation-timing-function |

## Getting Started

```bash
# Serve locally
npm run serve
# → http://localhost:8080

# Run tests
npm test
```

No installation required — just a browser and (optionally) a static server.

## Project Structure

```
css-props-ref/
├── index.html          # Entry point
├── style.css           # All styles (dark/light theme via CSS variables)
├── src/
│   ├── main.js         # DOM rendering, search, filter, live preview
│   ├── props.js        # CSS property data + query functions
│   └── i18n.js         # Japanese / English translations
└── tests/
    └── props.test.js   # 38 tests for data integrity and query functions
```

## License

MIT © 2026 SEN LLC (SEN 合同会社)
