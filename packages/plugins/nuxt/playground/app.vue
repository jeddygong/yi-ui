<script lang="ts" setup>
import { ref } from 'vue'

const hoverState = ref(false)
</script>

<template>
  <HoverCardRoot v-model:open="hoverState">
    <HoverCardTrigger
      href=""
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

<style scoped>
/* Your component styles here */
</style>
