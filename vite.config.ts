import { defineConfig, build as viteBuild, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { pathToFileURL } from "url";

// Routes to statically pre-render at build time so bots and AI crawlers
// (GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended, etc.)
// receive fully-populated HTML without executing JavaScript.
const PRERENDER_ROUTES = [
  "/",
  "/courses",
  "/rpl",
  "/rplad",
  "/courses/bundles",
  "/courses/short-courses",
  "/courses/voc",
  "/courses/full-day",
  "/courses/excavator",
  "/courses/excavator-training-perth",
  "/courses/wheel-loader",
  "/courses/moxy",
  "/courses/moxy-training-perth",
  "/courses/roller",
  "/courses/watercart",
  "/courses/integrated-tool-carrier",
  "/book",
  "/blog",
  "/about",
  "/contact",
  "/privatecall",
  "/ctf-funding",
  "/termsandconditions",
  "/privacypolicy",
  "/recruitment",
  "/affiliate",
  "/returning-student",
  "/refresher-training",
  "/rigid-haul-truck-application",
  "/rigid-haul-truck-booking",
  "/rigid-haul-truck-schedule",
];

function prerenderPlugin(): Plugin {
  let outDir = "dist";
  let ran = false;
  return {
    name: "cailin-prerender",
    apply: "build",
    configResolved(cfg) {
      outDir = cfg.build.outDir;
    },
    async closeBundle() {
      if (ran || process.env.SSR_BUILD === "1") return;
      ran = true;

      const ssrOutDir = path.resolve(".ssr-build");

      // Build the SSR bundle
      process.env.SSR_BUILD = "1";
      try {
        await viteBuild({
          configFile: false,
          logLevel: "warn",
          plugins: [react()],
          resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
          build: {
            ssr: path.resolve(__dirname, "src/entry-server.tsx"),
            outDir: ssrOutDir,
            emptyOutDir: true,
            ssrEmitAssets: false,
            rollupOptions: {
              input: path.resolve(__dirname, "src/entry-server.tsx"),
              output: { format: "esm", entryFileNames: "entry-server.mjs" },
            },
          },
        });

        const entryPath = path.join(ssrOutDir, "entry-server.mjs");
        const entryUrl = pathToFileURL(entryPath).href;
        const mod: { render: (url: string) => { html: string; head: string } } =
          await import(entryUrl);

        const templatePath = path.join(outDir, "index.html");
        const template = fs.readFileSync(templatePath, "utf-8");

        for (const route of PRERENDER_ROUTES) {
          try {
            const { html, head } = mod.render(route);
            let page = template.replace(
              '<div id="root"></div>',
              `<div id="root">${html}</div>`
            );
            if (head) {
              page = page.replace("</head>", `${head}\n</head>`);
            }
            const relPath =
              route === "/"
                ? "index.html"
                : path.join(route.replace(/^\//, ""), "index.html");
            const outPath = path.join(outDir, relPath);
            fs.mkdirSync(path.dirname(outPath), { recursive: true });
            fs.writeFileSync(outPath, page);
            console.log(`[prerender] ${route} -> ${relPath}`);
          } catch (err) {
            console.warn(`[prerender] failed ${route}:`, (err as Error).message);
          }
        }

        // Cleanup SSR build artifacts
        fs.rmSync(ssrOutDir, { recursive: true, force: true });
      } finally {
        delete process.env.SSR_BUILD;
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), prerenderPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    noExternal: ["react-helmet-async"],
  },
});
