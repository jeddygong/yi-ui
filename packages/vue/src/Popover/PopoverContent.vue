<script lang="ts">
import type { PopperContentProps } from '@/Popper'
import type { PrimitiveProps } from '@/Primitive'

export interface PopoverContentProps extends PopperContentProps, PrimitiveProps {
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { injectPopoverRootContext } from './PopoverRoot.vue'
import { useForwardExpose, useForwardPropsEmits } from '@yi-ui/shared'
import { PopperContent } from '@/Popper'
import { Presence } from '@/Presence'

const props = defineProps<PopperContentProps>()

const rootContext = injectPopoverRootContext()

const forwarded = useForwardPropsEmits(props)
const { forwardRef } = useForwardExpose()
</script>

<template>
  <Presence :ref="forwardRef" :present="rootContext.open.value">
    <PopperContent
      v-bind="forwarded"
      :ref="forwardRef"
    >
      <slot />
    </PopperContent>
  </Presence>
</template>
