<script lang="ts">
// import type {
//   PopoverContentImplEmits,
//   PopoverContentImplProps,
// } from './PopoverContentImpl.vue'

// export type PopoverContentEmits = PopoverContentImplEmits

// export interface PopoverContentProps extends PopoverContentImplProps {
export interface PopoverContentProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { injectPopoverRootContext } from './PopoverRoot.vue'
import { useForwardExpose } from '@yi-ui/shared'
import { Presence } from '@/Presence'

// const props = defineProps<PopoverContentProps>()
// const emits = defineEmits<PopoverContentEmits>()

const rootContext = injectPopoverRootContext()

// const forwarded = useForwardPropsEmits(props, emits)
const { forwardRef } = useForwardExpose()

// rootContext.contentId ||= useId(undefined, 'radix-vue-popover-content')
</script>

<template>
  <Presence :ref="forwardRef" :present="rootContext.open.value">
    <!-- <PopoverContentModal
      v-if="rootContext.modal.value"
      v-bind="forwarded"
      :ref="forwardRef"
    >
      <slot />
    </PopoverContentModal>
    <PopoverContentNonModal
      v-else
      v-bind="forwarded"
      :ref="forwardRef"
    >
      <slot />
    </PopoverContentNonModal> -->
    <slot />
  </Presence>
</template>
