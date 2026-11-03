import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/lib/AuthContext";
import { LangProvider } from "@/lib/i18n";
import ReleasePlayerProvider from "@/components/quixosis/ReleasePlayerProvider";
import BandcampPlayerProvider from "@/components/text/BandcampPlayerProvider";
import { Base44Scripts } from "base44:document";
import appCss from "@/index.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Daniel Lofredo Rota" },
      { name: "description", content: "Music, podcasts and text. Quito, Ecuador." },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
  component: RootComponent,
});

function RootComponent() {
  return (
    <AuthProvider>
      <LangProvider>
        {/* Keep this provider above route components and release dialogs. */}
        <BandcampPlayerProvider>
          <ReleasePlayerProvider>
            <Outlet />
            <Toaster />
          </ReleasePlayerProvider>
        </BandcampPlayerProvider>
      </LangProvider>
    </AuthProvider>
  );
}

function RootDocument({ children }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body data-react-root="true">
        {children}
        <Base44Scripts />
        <Scripts />
      </body>
    </html>
  );
}
