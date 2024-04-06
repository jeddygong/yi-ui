import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

const projectRootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
      cleanVueFileName: true,
      exclude: ['src/test/**'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(projectRootDir, 'src'),
    },
  },
  build: {
    lib: {
      name: 'yi-ui',
      fileName: 'index',
      entry: resolve(__dirname, 'src/index.ts'),
    },
    rollupOptions: {
      // 不捆绑外部依赖
      external: ['vue', '@floating-ui/vue'],
      output: {
        // 提供在 UMD 构建中使用的全局变量
        globals: {
          'vue': 'Vue',
          '@floating-ui/vue': '@floating-ui/vue',
        },
      },
    },
  },
})
