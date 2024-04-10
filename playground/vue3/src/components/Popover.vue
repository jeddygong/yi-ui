<script setup lang="ts">
import { PopoverContent, PopoverRoot, PopoverTrigger } from '@yi-ui/vue'
</script>

<template>
  <PopoverRoot>
    <!-- PopoverTrigger -->
    <PopoverTrigger>
      点击显示/隐藏
    </PopoverTrigger>

    <PopoverContent>
      <ul>
        <li>popover content: 11111</li>
        <li>popover content: 22222</li>
        <li>popover content: 33333</li>
        <li>popover content: 44444</li>
        <li>popover content: 55555</li>
      </ul>
    </PopoverContent>
  </PopoverRoot>
</template>

<style scoped>
/* Add your component styles here */
</style>
