// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  ...(process.env.NODE_ENV !== "development" && {
    site: "https://raphaelsanchez.github.io",
    base: "/lunedit",
  }),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],

  image: {
    domains: ["localhost", "lunedit.fr"],
  },
});
