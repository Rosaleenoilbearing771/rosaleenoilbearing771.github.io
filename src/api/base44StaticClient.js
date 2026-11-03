import { createClient } from "@base44/sdk";
import { getAppParams } from "@/lib/app-params";

const { appId, token } = getAppParams();

// Used by the GitHub Pages build only: the site is not served by Base44, so there is
// no same-origin /api proxy and requests go straight to the platform API.
export const base44 = createClient({
  appId,
  token: token ?? undefined,
  serverUrl: "https://base44.app",
});