<script setup lang="ts">
import { PopoverRoot } from '@yi-ui/vue'
import { ref } from 'vue'

const toggleState = ref(false)

function handleVisible() {
  toggleState.value = !toggleState.value
}
</script>

<template>
  <PopoverRoot v-model:open="toggleState">
    <!-- PopoverTrigger -->
    <button @click="handleVisible">
      点击显示/隐藏
    </button>

    <!-- PopoverContent -->
    <ul v-if="toggleState">
      <li>popover content: 11111</li>
      <li>popover content: 22222</li>
      <li>popover content: 33333</li>
      <li>popover content: 44444</li>
      <li>popover content: 55555</li>
    </ul>
  </PopoverRoot>
</template>

<style scoped>
/* Add your component styles here */
</style>
