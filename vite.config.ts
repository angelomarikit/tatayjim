import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function shareOrigin() {
  const custom = process.env.VITE_SITE_URL?.trim().replace(/\/$/, "");
  if (custom) return custom;
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${production}`;
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel}`;
  return "";
}

function shareMeta(): Plugin {
  const origin = shareOrigin();
  return {
    name: "share-meta",
    transformIndexHtml(html) {
      return html.replaceAll("%SHARE_ORIGIN%", origin);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), shareMeta()],
});
