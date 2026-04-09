import { defineConfig } from "astro/config";
import react from "@astrojs/react";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: isGitHubPages ? "https://theadmancross.github.io" : "https://twm.netlify.app",
  base: isGitHubPages ? "/twm" : "/",
  integrations: [react()],
  output: "static"
});
