<script lang="ts">
import type { Ref } from 'vue'
import { createContext } from '@yi-ui/shared'

export interface PopoverRootProps {
  /**
   * 打开状态，当它最初被渲染时。当您不需要控制其打开状态时使用。
   */
  defaultOpen?: boolean
  /**
   * The controlled open state of the popover.
   * 控制当前组件的打开状态
   */
  open?: boolean
  /**
   * The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.
   * 当设置为true时，将禁用与外部元素的交互，并且只有弹出内容对屏幕阅读器可见。
   * @defaultValue false
   */
  modal?: boolean
}
export type PopoverRootEmits = {
  /**
   * Event handler called when the open state of the popover changes.
   * 打开状态事件回调
   */
  'update:open': [value: boolean]
}

export interface PopoverRootContext {
  triggerElement: Ref<HTMLElement | undefined>
  contentId: string
  open: Ref<boolean>
  modal: Ref<boolean>
  onOpenChange: (value: boolean) => void
  onOpenToggle: () => void
  hasCustomAnchor: Ref<boolean>
}

// 组件上下文
export const [injectPopoverRootContext, providePopoverRootContext]
  = createContext<PopoverRootContext>('PopoverRoot')
</script>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { useVModel } from '@vueuse/core'
import { PopperRoot } from '@/Popper'
// import { PopperRoot } from '../Popper'

const props = withDefaults(defineProps<PopoverRootProps>(), {
  defaultOpen: false,
  open: undefined,
  modal: false,
})
const emit = defineEmits<PopoverRootEmits>()
const { modal } = toRefs(props)
const open = useVModel(props, 'open', emit, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as false,
}) as Ref<boolean>

const triggerElement = ref<HTMLElement>()
const hasCustomAnchor = ref(false)

providePopoverRootContext({
  contentId: '',
  modal,
  open,
  onOpenChange: (value) => {
    open.value = value
  },
  onOpenToggle: () => {
    open.value = !open.value
  },
  triggerElement,
  hasCustomAnchor,
})
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
