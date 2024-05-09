<script setup lang="ts">
import { ref } from 'vue'
// import {
//   HoverCardArrow,
//   HoverCardContent,
//   HoverCardPortal,
//   HoverCardRoot,
//   HoverCardTrigger,
// } from '@yi-ui/vue'

const hoverState = ref(false)
// const enabled = ref(false)
</script>

<template>
  <!-- <Switch
    v-model="enabled"
    :class="enabled ? 'bg-blue-600' : 'bg-gray-200'"
    class="relative inline-flex h-6 w-11 items-center rounded-full"
  >
    <span class="sr-only">Enable notifications</span>
    <span
      :class="enabled ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block h-4 w-4 transform rounded-full bg-white transition"
    />
  </Switch> -->

  <HoverCardRoot v-model:open="hoverState">
    <HoverCardTrigger
      href="https://twitter.com/radix_ui"
      target="_blank"
      rel="noreferrer noopener"
    >
      悬浮鼠标
    </HoverCardTrigger>
    <HoverCardPortal>
      <HoverCardContent
        :side-offset="5"
        as-child
        data-vitest-content-wrapper="test-hover-card-content"
      >
        <div class="flex flex-col gap-[7px]">
          <div class="flex flex-col gap-[15px]">
            悬浮内容1
          </div>
          <div class="flex flex-col gap-[15px]">
            悬浮内容2
          </div>
          <div class="flex flex-col gap-[15px]">
            悬浮内容3
          </div>
          <div class="flex flex-col gap-[15px]">
            悬浮内容4
          </div>
        </div>
        <HoverCardArrow class="fill-white" :width="8" />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>
