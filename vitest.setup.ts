import { expect } from 'vitest'
// import '@testing-library/jest-dom/vitest'
import type { AxeMatchers } from 'vitest-axe/matchers'
import * as matchers from 'vitest-axe/matchers'
import { configureAxe } from 'vitest-axe'
import 'vitest-axe/extend-expect'
// import 'vitest-canvas-mock'

expect.extend(matchers)

configureAxe({
  globalOptions: {
    rules: [{
      id: 'region',
      enabled: false,
    }],
  },
})

// 拓展 ts 的属性，例如 toHaveNoViolations
declare module 'vitest' {
  export interface Assertion extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}
