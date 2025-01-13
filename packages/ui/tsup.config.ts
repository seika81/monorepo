import { defineConfig, Options } from "tsup";

const cfg: Options = {
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  // minify: true,
  // sourcemap: false,
  // splitting: false,
  target: "es2022",
  // treeshake: false,
};

export default defineConfig([
  {
    ...cfg,
    // These are client components. They will get the 'use client' at the top.
    entry: { index: "src/client.ts" },
    esbuildOptions(options) {
      options.banner = {
        js: '"use client"',
      };
    },
    //   // However you like this.
    //   external: [
    //     '@twicpics/components',
    //     'autoprefixer',
    //     'postcss',
    //     'react',
    //     'react-dom',
    //     'tailwindcss',
    //   ],
    outDir: "dist/client",
  },
  {
    ...cfg,
    // I was doing something else with another file, but this could be 'server components' or whatever
    entry: { index: "src/index.ts" },
    outDir: "dist",
  },
]);
