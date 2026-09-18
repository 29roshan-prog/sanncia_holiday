import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  // Let Netlify's official plugin own the server build/output instead of Nitro's
  // default Cloudflare target.
  nitro: false,
  plugins: [netlify()],
  tanstackStart: {
    server: { entry: "server" },
  },
});
