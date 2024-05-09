import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import YiUIResolver from '@yi-ui/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [YiUIResolver()],
    }),
    Components({
      resolvers: [YiUIResolver()],
    }),
  ],
  resolve: {
    // alias: {
    //   '@': resolve(projectRootDir, 'src'),
    // },
    // dedupe: [
    //   'vue'
    // ]
  },
})
