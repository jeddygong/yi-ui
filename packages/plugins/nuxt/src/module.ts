import { addComponent, defineNuxtModule } from '@nuxt/kit'
import { components as allComponents } from '../../../vue/constant/components'

export interface ModuleOptions {
  components: Partial<Record<keyof typeof allComponents, boolean>> | boolean
  prefix: string
}

// 第一步：创建一个 Nuxt 模块 name 为 `@yi-ui/nuxt` 的模块；
export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@yi-ui/nuxt',
    configKey: 'yi-ui',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    prefix: '',
    components: true,
  },
  async setup(options) {
    // 第二步：导入你的组件库 `@yi-ui/vue` 中所有的组件；
    function getComponents() {
      if (typeof options.components === 'object') {
        return Object.entries(allComponents)
          .filter(([name]) => (options.components as Record<string, boolean>)[name])
          .flatMap(([_, components]) => components)
      }

      if (options.components)
        return Object.values(allComponents).flat()

      return []
    }

    // 第三步：注册一个要自动导入的组件；
    for (const component of getComponents()) {
      addComponent({
        name: `${options.prefix}${component}`,
        export: component,
        filePath: '@yi-ui/vue',
      })
    }
  },
})
