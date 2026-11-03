import { Fragment } from "react";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getPostBySlug } from "@/lib/data";
import { formatPostDate } from "@/lib/dates";
import { useSite } from "@/lib/i18n";
import PageShell from "@/components/PageShell";
import AudioTransport from "@/components/text/AudioTransport";
import BandcampEmbed from "@/components/text/BandcampEmbed";
import { Image } from "@/components/ui/image";

export const Route = createFileRoute("/text/$slug")({
  loader: async ({ params }) => {
    const post = await getPostBySlug({ data: { slug: params.slug } });
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Text"} — Daniel Lofredo Rota` },
      { name: "description", content: loaderData?.dek ?? "" },
    ],
  }),
  component: PostPage,
});

function Figure({ src, caption }) {
  return (
    <figure className="my-8">
      <Image src={src} alt={caption || ""} fittingType="fill" className="w-full grayscale" />
      {caption ? (
        <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function PostPage() {
  const site = useSite();
  const post = Route.useLoaderData();
  const bodyText = site.lang === "es" ? post.body_es || post.body : post.body;
  const note = site.lang === "es" ? post.note_es || post.note : post.note;
  const paragraphs = (bodyText || "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  const images = post.images ?? [];

  return (
    <PageShell section={site.ui.sections.text}>
      <article className="mx-auto max-w-[46rem] px-5 pb-20 pt-10 md:px-8 md:pt-16">
        <Link
          to="/text"
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          {site.ui.text.back}
        </Link>
        <h1 className="mt-6 font-heading text-[clamp(2rem,5.6vw,3.1rem)] font-light leading-[0.98] tracking-[-0.03em]">
          {post.title}
        </h1>
        {post.published_date ? (
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {formatPostDate(post.published_date, site.lang)}
          </p>
        ) : null}
        {post.dek ? (
          <p className="mt-6 text-[1.125rem] leading-[1.6] text-foreground/70">{post.dek}</p>
        ) : null}

        {post.cover_image ? <Figure src={post.cover_image} /> : null}

        {post.bandcamp_album_id ? (
          <BandcampEmbed albumId={post.bandcamp_album_id} title={post.title} />
        ) : null}

        {note ? (
          <p className="hairline mt-8 border-t pt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground">
            {note}
          </p>
        ) : null}

        {paragraphs.map((text, i) => (
          <Fragment key={i}>
            <p className="mt-5 text-[1.0625rem] leading-[1.75] text-foreground/90">{text}</p>
            {i === 0 && images[0] ? <Figure src={images[0]} /> : null}
            {i === 1 && images[1] ? <Figure src={images[1]} /> : null}
          </Fragment>
        ))}
      </article>

      {post.audio_url ? <AudioTransport src={post.audio_url} title={post.audio_title || post.title} /> : null}
    </PageShell>
  );
}