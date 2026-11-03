import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { createQueryClient } from "@/lib/query-client";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import "@/index.css";

// Browser entry for the GitHub Pages build. GitHub serves static files only, so the
// router runs entirely in the browser: no server functions, data read straight from
// the Base44 API (see src/lib/data.static.js).
const basepath = import.meta.env.BASE_URL.replace(/\/+$/, "") || "/";
const queryClient = createQueryClient();

const router = createRouter({
  routeTree,
  basepath,
  context: { queryClient },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  defaultErrorComponent: DefaultCatchBoundary,
  defaultNotFoundComponent: () => <NotFound />,
  scrollRestoration: true,
});

// No server-rendered <head>, so per-page titles come from the resolved route's meta.
const syncTitle = () => {
  const matches = router.state.matches;
  const title = matches[matches.length - 1]?.meta?.find((tag) => tag.title)?.title;
  if (title) document.title = title;
};
router.subscribe("onResolved", syncTitle);

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);