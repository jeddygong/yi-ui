import { resolve } from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

if (process.env.TEST_WATCH) {
  // Patch stdin on the process so that we can fake it to seem like a real interactive terminal and pass the TTY checks
  process.stdin.isTTY = true
  process.stdin.setRawMode = () => process.stdin
}
const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      '@': r('./packages/vue/src'),
      '@yi-ui/vue': r('./packages/vue'),
      '@yi-ui/shared': r('./packages/shared'),
    },
  },
  test: {
    // root: './packages/*',
    environment: 'jsdom',
    globals: true, // 开启全局 API 的访问
    exclude: ['node_modules'],
    include: ['packages/**/*.test.{ts,js}'],
    coverage: {
      // all: true,
      // enabled: true, // 需要安装 @vitest/ui 来可视化查看你的覆盖率报告
      provider: 'istanbul', // or 'v8'
    },
    setupFiles: './vitest.setup.ts',
    // server: {
    //   deps: {
    //     // 看情况是不是要删除，暂时没用到
    //     inline: ['vitest-canvas-mock'],
    //   },
    // },
    // environmentOptions: {
    //   jsdom: {
    //     resources: 'usable',
    //   },
    // },
  },
})
