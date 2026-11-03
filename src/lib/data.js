// Data reads used by route loaders.
// On Base44 these run as server functions; the GitHub Pages build swaps this module
// for data.static.js, which reads the same records from the browser (vite.pages.config.js).
export { listPosts, countPosts, getPostBySlug } from "@/lib/server-fns";