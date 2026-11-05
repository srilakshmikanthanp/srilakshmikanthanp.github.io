# Personal website

This is the source code for my personal website, which is hosted at [https://srilakshmikanthanp.com](https://srilakshmikanthanp.com).

| Page   | URL                                                                    | Source             |
| ------ | ---------------------------------------------------------------------- | ------------------ |
| About  | [srilakshmikanthanp.com](https://srilakshmikanthanp.com)               | `src/pages/about`  |
| Links  | [srilakshmikanthanp.com/links](https://srilakshmikanthanp.com/links)   | `src/pages/links`  |
| Donate | [srilakshmikanthanp.com/donate](https://srilakshmikanthanp.com/donate) | `src/pages/donate` |

Routes are in `src/App.tsx` (React Router), shared components in `src/components`, and social links and page paths
in `src/constants`. The build copies `index.html` to `404.html` so GitHub Pages serves the app for `/links` and
`/donate` too.

## Scripts

- `npm start` – dev server (`/`, `/links/`, `/donate/`)
- `npm run build` – type-check and build to `dist`
- `npm run lint` / `npm run format`
- `npm run deploy` – publish `dist` to GitHub Pages
