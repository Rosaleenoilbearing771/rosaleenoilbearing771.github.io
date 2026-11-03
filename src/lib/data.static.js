import { base44 } from "@/api/base44Client";

// Same reads as src/lib/server-fns.js, made directly from the browser because
// GitHub Pages has no server to run them on.
const asArray = (result) => (Array.isArray(result) ? result : (result?.items ?? []));

// A static host has no error boundary behind it and the API only answers once the app
// is published, so a failed read degrades to the empty state instead of a broken page.
const safe = (fallback) => (error) => {
  console.warn("[static] read failed", error?.message ?? error);
  return fallback;
};

export const listPosts = async () => {
  const posts = await base44.entities.Post.filter({}, { sort: "-created_date", limit: 100 }).catch(safe([]));
  return asArray(posts);
};

export const countPosts = async () => {
  try {
    return await base44.entities.Post.count({});
  } catch {
    return 0;
  }
};

export const getPostBySlug = async ({ data }) => {
  const result = await base44.entities.Post.filter({ slug: data.slug }, { limit: 1 }).catch(safe([]));
  return asArray(result)[0] ?? null;
};