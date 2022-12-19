import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
const pathSrc = path.resolve(__dirname, './src');

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        components: path.resolve(__dirname, './src/components'),
        config: path.resolve(__dirname, './src/config'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@use "./src/styles/abstracts/helpers" as *;`,
          // additionalData: (source, fp) => {
          //   console.log('fp', fp);
          //   // console.log('source', source);
          //   if (fp.endsWith('index.scss')) return source;
          //   return `@import "${pathSrc}/styles/abstracts/helpers"; ${source}`;
          // },
        },
      },
    },
  };
});
