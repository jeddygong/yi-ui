<script lang="ts">
import type { PopperContentProps } from '@/Popper'
import type { PrimitiveProps } from '@/Primitive'
// import type {
//   DismissableLayerEmits,
//   DismissableLayerProps,
// } from '@/DismissableLayer'
// import type { FocusScopeProps } from '@/FocusScope'

// export type PopoverContentImplEmits = DismissableLayerEmits & {
export type PopoverContentImplEmits = {
  /**
   * Event handler called when auto-focusing on open.
   * Can be prevented.
   */
  openAutoFocus: [event: Event]
  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  closeAutoFocus: [event: Event]
}

export interface PopoverContentImplProps extends PopperContentProps, PrimitiveProps {
  /**
   * When `true`, hover/focus/click interactions will be disabled on elements outside
   * the `DismissableLayer`. Users will need to click twice on outside elements to
   * interact with them: once to close the `DismissableLayer`, and again to trigger the element.
   */
  disableOutsidePointerEvents?: boolean
}
//   DismissableLayerProps {
//   /**
//    * Whether focus should be trapped within the `MenuContent`
//    * @defaultValue false
//    */
//   trapFocus?: FocusScopeProps['trapped']
// }
</script>

<script setup lang="ts">
import { injectPopoverRootContext } from './PopoverRoot.vue'
import { PopperContent } from '@/Popper'
// import { DismissableLayer } from '@/DismissableLayer'
// import { FocusScope } from '@/FocusScope'
// import { useFocusGuards, useForwardExpose, useForwardProps } from '@yi-ui/shared'
import { useForwardExpose, useForwardProps } from '@yi-ui/shared'

const props = defineProps<PopoverContentImplProps>()
// const emits = defineEmits<PopoverContentImplEmits>()

const forwarded = useForwardProps(props)
const { forwardRef } = useForwardExpose()

const rootContext = injectPopoverRootContext()
// useFocusGuards()
</script>

<!-- <FocusScope
  as-child
  loop
  :trapped="trapFocus"
  @mount-auto-focus="emits('openAutoFocus', $event)"
  @unmount-auto-focus="emits('closeAutoFocus', $event)"
>
  <DismissableLayer
    as-child
    :disable-outside-pointer-events="disableOutsidePointerEvents"
    @pointer-down-outside="emits('pointerDownOutside', $event)"
    @interact-outside="emits('interactOutside', $event)"
    @escape-key-down="emits('escapeKeyDown', $event)"
    @focus-outside="emits('focusOutside', $event)"
    @dismiss="rootContext.onOpenChange(false)"
  >/ -->
<template>
  <PopperContent
    v-bind="forwarded"
    :id="rootContext.contentId"
    :ref="forwardRef"
    :data-state="rootContext.open.value ? 'open' : 'closed'"
    role="dialog"
    :style="{
      '--radix-popover-content-transform-origin':
        'var(--radix-popper-transform-origin)',
      '--radix-popover-content-available-width':
        'var(--radix-popper-available-width)',
      '--radix-popover-content-available-height':
        'var(--radix-popper-available-height)',
      '--radix-popover-trigger-width': 'var(--radix-popper-anchor-width)',
      '--radix-popover-trigger-height': 'var(--radix-popper-anchor-height)',
    }"
  >
    <slot />
  </PopperContent>
  <!-- </DismissableLayer>
  </FocusScope> -->
</template>
