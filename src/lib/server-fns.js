import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const getServerInfo = createServerFn({ method: "GET" }).handler(async () => ({
  renderedAt: new Date().toISOString(),
}));

const asArray = (result) => (Array.isArray(result) ? result : (result?.items ?? []));

export const listPosts = createServerFn({ method: "GET" }).handler(async ({ context }) => {
  const posts = await context.getBase44().entities.Post.list("-created_date", 100);
  return asArray(posts);
});

export const countPosts = createServerFn({ method: "GET" }).handler(async ({ context }) => {
  try {
    return await context.getBase44().entities.Post.count({});
  } catch {
    return 0;
  }
});

export const getPostBySlug = createServerFn({ method: "GET" })
  .validator(z.object({ slug: z.string().min(1).max(200) }))
  .handler(async ({ data, context }) => {
    const result = await context
      .getBase44()
      .entities.Post.filter({ slug: data.slug }, { limit: 1 });
    return asArray(result)[0] ?? null;
  });