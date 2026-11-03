import { copyFileSync, existsSync, renameSync, writeFileSync } from "node:fs";
import path from "node:path";

const out = path.resolve("dist-pages");
const built = path.join(out, "pages.html");
const index = path.join(out, "index.html");

if (!existsSync(built)) throw new Error("pages.html was not built — run vite build --config vite.pages.config.js first");

// GitHub Pages looks for index.html at each path.
renameSync(built, index);
// Deep links (e.g. /text/a-post) are served this copy, which boots the client router.
copyFileSync(index, path.join(out, "404.html"));
// Stops GitHub from processing the files with Jekyll.
writeFileSync(path.join(out, ".nojekyll"), "");

console.log("GitHub Pages build ready in dist-pages/");