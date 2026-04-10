# Lumiere — Fine Art Photography Website

A minimalist React photography website demonstrating core React concepts.

## React Concepts Covered

| Concept | Location |
|---|---|
| React Components | All files in `/src/components` and `/src/pages` |
| Component API | `App.js` — class component with render() |
| Component Lifecycle | `App.js`, `About.js` — componentDidMount, componentWillUnmount |
| React Constructors | `App.js`, `About.js` — constructor(props) with super(props) |
| React State | `Work.js` — useState for filter; `About.js` — animated counters |
| React Props | `PhotoCard.js` — photo prop; `MasonryItem.js` — photo prop |
| Props Validation | `PhotoCard.js`, `Work.js` — PropTypes |
| Styling React | `styles.css` — CSS variables, global styles |
| Hooks | `Cursor.js`, `Nav.js` — useState, useEffect; `Work.js` — useMemo, useCallback |
| Routing | `App.js` — BrowserRouter, Routes, Route; `Nav.js` — NavLink |
| React Dataflow | Props passed from pages down to card components |

## Screens
- **Home** — Hero, marquee, featured grid, about strip
- **Work** — Filterable masonry gallery (portrait, landscape, street, architecture)
- **About** — Full-bleed hero, animated stat counters, editorial layout

## Running the App

```bash
npm install
npm start
```

## Deploying
```bash
npm run build
# Deploy /build to Vercel, Netlify, or any static host
```
