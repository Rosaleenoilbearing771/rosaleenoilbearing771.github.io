import { createFileRoute } from "@tanstack/react-router";
import { listPosts } from "@/lib/data";
import { useSite } from "@/lib/i18n";
import PageShell from "@/components/PageShell";
import PostRow from "@/components/text/PostRow";

export const Route = createFileRoute("/text/")({
  loader: () => listPosts(),
  head: () => ({
    meta: [
      { title: "Text — Daniel Lofredo Rota" },
      { name: "description", content: "Notes, images and audio." },
    ],
  }),
  component: TextIndex,
});

function TextIndex() {
  const posts = Route.useLoaderData() ?? [];
  const site = useSite();

  return (
    <PageShell section={site.ui.sections.text}>
      {posts.length === 0 ? (
        <div className="px-5 py-16 md:px-8 md:py-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {site.ui.text.empty}
          </p>
        </div>
      ) : (
        <ul>
          {posts.map((post, i) => (
            <PostRow key={post.id} post={post} index={i} />
          ))}
        </ul>
      )}
    </PageShell>
  );
}