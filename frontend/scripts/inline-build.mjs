import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');

let html = fs.readFileSync(indexPath, 'utf8');

html = html.replace(
  /<link rel="stylesheet" crossorigin href="([^"]+)">/,
  (_, href) => {
    const cssPath = path.join(distDir, href.replace(/^\//, ''));
    const css = fs.readFileSync(cssPath, 'utf8');
    return `<style>${css}</style>`;
  }
);

html = html.replace(
  /<script type="module" crossorigin src="([^"]+)"><\/script>/,
  (_, src) => {
    const jsPath = path.join(distDir, src.replace(/^\//, ''));
    const js = fs.readFileSync(jsPath, 'utf8');
    return `<script type="module">${js}</script>`;
  }
);

fs.writeFileSync(indexPath, html);
