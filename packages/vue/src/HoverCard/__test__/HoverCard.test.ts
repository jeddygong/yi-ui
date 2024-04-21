import { beforeEach, describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import HoverCard from './HoverCard.vue'
import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'

const sleep = (duration: number) => new Promise(resolve => setTimeout(resolve, duration))

describe('默认的悬浮组件', () => {
  // 自定义全局的 ResizeObserver API，因为 Vue3 的测试环境不支持 ResizeObserver
  // globalThis.ResizeObserver = class ResizeObserver {
  //     observe() {}
  //     unobserve() {}
  //     disconnect() {}
  // }
  // const wrapper = ref<VueWrapper<InstanceType<typeof HoverCard>>(null)
  let wrapper: VueWrapper<InstanceType<typeof HoverCard>>
  beforeEach(() => {
    wrapper = mount(HoverCard, { attachTo: document.body })
  })

  it('测试 HoverCard 组件是否渲染成功', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('测试 HoverCard 组件是否通过了可访问性测试', async () => {
    expect(await axe(wrapper.element)).toHaveNoViolations()
  })

  describe('模拟 HoverCard 组件中的鼠标移入100ms后', () => {
    it('是否应该通过可访问性测试', async () => {
      await wrapper.find('a').trigger('mouseenter')
      await sleep(100)
      expect(await axe(document.body)).toHaveNoViolations()
    })
  })

  // it('模拟 HoverCard 组件中的鼠标移入事件', async () => {
  //     // const user = userEvent.setup()
  //     // const a = wrapper.find('a')
  //     // // const button = await a.trigger('mouseenter')
  //     // await user.hover(a.element)

  //     // 用 @vue/test-utils 来查找全局属性为 data-vitest-content-wrapper 的元素
  //     // const content = wrapper.find('[data-vitest-content-wrapper]')

  //     await wrapper.find('a').trigger('mouseenter')
  //     await sleep(2000)

  //     // 查找具有特定属性的全局 div 元素
  //     // const divsWithAttribute = document.querySelectorAll('div[data-vitest-content-wrapper]')[0];
  //     // console.log(document.querySelector('div[data-vitest-content-wrapper]'), 'document');
  //     // // console.log(divsWithAttribute, 'divsWithAttribute');

  //     // expect(divsWithAttribute).toBeDefined();

  //     // const content = wrapper.find('[data-vitest-content-wrapper]')
  //     // console.log(divsWithAttribute, 'content');

  //     // if(content) {
  //     //     console.log(content?.exists(), 'content.element');
  //     // }
  //     // else {
  //     //     console.log('content.element 不存在');
  //     // }

  //     expect(await axe(document.body)).toHaveNoViolations()
  //     // console.log(content?.exists(), '222');
  //     // expect(content?.exists()).toBe(true)
  // })
})
