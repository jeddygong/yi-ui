import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      '@': r('./src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: ['**/node_modules/**'],
    include: ['./**/*.test.{ts,js}'],
    coverage: {
      provider: 'istanbul', // or 'v8'
    },
    setupFiles: './vitest.setup.ts',
    server: {
      deps: {
        // 看情况是不是要删除，暂时没用到
        inline: ['vitest-canvas-mock'],
      },
    },
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
  },
})
