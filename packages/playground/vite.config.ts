// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import vueJsx from '@vitejs/plugin-vue-jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import Components from 'unplugin-vue-components/vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dirs: '',
      resolvers: [AntDesignVueResolver({ resolveIcons: true })],
    }),
  ],
  server: {
    port: 3200,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
