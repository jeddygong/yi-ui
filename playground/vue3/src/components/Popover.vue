<script setup lang="ts">
import { PopoverRoot, PopoverTrigger } from '@yi-ui/vue'
import { ref } from 'vue'

const toggleState = ref(false)
</script>

<template>
  <PopoverRoot v-model:open="toggleState">
    <!-- PopoverTrigger -->
    <PopoverTrigger>
      点击显示/隐藏
    </PopoverTrigger>

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
