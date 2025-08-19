import { defineConfig } from "tsup";
import postcss from "postcss";
import path from "path";
import fs from "fs";
export default defineConfig({
  entry: ["src/index.ts", "src/components/**/*.tsx"], // Include all components
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ["react", "react-dom", "grpc-web"],
  loader: {
    ".js": "jsx",
    ".jsx": "jsx",
    ".ts": "tsx",
    ".tsx": "tsx",
    ".css": "css",
  },
  esbuildOptions(options) {
    options.plugins = [
      {
        name: "postcss-plugin",
        setup(build) {
          build.onLoad({ filter: /\.css$/ }, async (args) => {
            // Read and process CSS using PostCSS
            const css = fs.readFileSync(args.path, "utf-8");
            const result = await postcss([
              require("tailwindcss"),
              require("autoprefixer"),
            ]).process(css, {
              from: args.path,
              to: path.join(path.dirname(args.path), "dist", "styles.css"), // Ensure output in dist/
            });
            return { contents: result.css, loader: "css" };
          });
        },
      },
    ];
    options.loader = { ".ts": "tsx", ".js": "jsx" }; // Ensure .ts and .js are handled correctly
    options.alias = {
      "@/rapida": "./src",
    };
  },
});
