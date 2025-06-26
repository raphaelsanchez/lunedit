// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  ...(process.env.NODE_ENV !== "development" && {
    site: "https://lunedit.netlify.app/",
    base: "/",
  }),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],

  image: {
    domains: ["localhost", "lunedit.fr"],
  },
});
