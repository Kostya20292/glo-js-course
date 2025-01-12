/* eslint-disable nonblock-statement-body-position */
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: './', // Устанавливаем базовый путь для всех подключаемых файлов
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name)) return 'assets/css/[name][extname]';
          if (/\.(png|jpe?g|gif|svg|webp|avif|ico)$/.test(name))
            return 'assets/images/[name][extname]';
          if (/\.(woff2?|ttf|otf|eot)$/.test(name)) return 'assets/fonts/[name][extname]';
          return 'assets/js/[name].[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
      },
    },
  },
});
