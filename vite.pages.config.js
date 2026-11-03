import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { defineConfig } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));
const resolveSrc = (p) => path.resolve(root, p);

// GitHub Pages serves the site from https://<user>.github.io/<repo>/,
// so every asset URL needs that prefix.
const base = process.env.PAGES_BASE || "/";

// Public Base44 app ID
const APP_ID = process.env.VITE_BASE44_APP_ID || "6ae8f38980d32828158de547";

export default defineConfig({
  base,

  plugins: [
    tanstackRouter({
      target: "react",
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
      autoCodeSplitting: true,
    }),
    react(),
  ],

  resolve: {
    alias: [
      // No Base44 runtime scripts on GitHub Pages.
      {
        find: /^base44:document$/,
        replacement: resolveSrc("src/lib/base44-document.stub.js"),
      },

      // Read records from the browser instead of calling server functions.
      {
        find: /^@\/lib\/data$/,
        replacement: resolveSrc("src/lib/data.static.js"),
      },

      // Talk to the platform API directly.
      {
        find: /^@\/api\/base44Client$/,
        replacement: resolveSrc("src/api/base44StaticClient.js"),
      },

      // General source alias.
      {
        find: /^@\//,
        replacement: `${resolveSrc("src")}/`,
      },
    ],
  },

  define: {
    "import.meta.env.VITE_BASE44_APP_ID": JSON.stringify(APP_ID),
  },

  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
    rollupOptions: {
      input: resolveSrc("pages.html"),
    },
  },
});
