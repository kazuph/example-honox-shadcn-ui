import path from "node:path";
import pages from "@hono/vite-cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import honox from "honox/vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
  },
  ssr: {
    external: ["react", "react-dom"],
  },
  plugins: [
    honox({
      devServer: {
        adapter,
      },
      client: {
        input: ["./app/client.ts", "/app/globals.css"],
      },
    }),
    pages(),
  ],
});
