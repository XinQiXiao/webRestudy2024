import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver,
} from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
// import vitePluginSass from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vitePluginSass(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],

      // 插件预设支持导入的api
      imports: ["vue", "vue-router", "pinia"],
      eslintrc: {
        enabled: false, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: "src/types/auto-imports.d.ts",
    }),
    Components({
      resolvers: [
        ElementPlusResolver()
      ],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
