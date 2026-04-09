import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://theadmancross.github.io",
  base: "/twm",
  integrations: [react()],
  output: "static"
});
