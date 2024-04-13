<script lang="ts" setup>
import { ref } from 'vue'
import { flip, offset, shift, useFloating } from '@floating-ui/vue'

// 用于定位的参考（或锚点）元素
const reference = ref(null)
const referenceTop = ref(null)
const referenceLeft = ref(null)
const referenceRight = ref(null)
// 用于浮动的元素
const floating = ref(null)
const floatingTop = ref(null)
const floatingLeft = ref(null)
const floatingRight = ref(null)
// 中间件
const middleware = [shift(), flip(), offset(10)]
// 用于控制浮动元素的样式
const { floatingStyles } = useFloating(reference, floating, {
  // 指定初始化浮动位置
  placement: 'bottom',
  middleware,
})
const { floatingStyles: floatingTopStyles } = useFloating(referenceTop, floatingTop, {
  // 指定初始化浮动位置
  placement: 'top',
  middleware,
})
const { floatingStyles: floatingLeftStyles } = useFloating(referenceLeft, floatingLeft, {
  // 指定初始化浮动位置
  placement: 'left',
  middleware,
})
const { floatingStyles: floatingRightStyles } = useFloating(referenceRight, floatingRight, {
  // 指定初始化浮动位置
  placement: 'right',
  middleware,
})
</script>

<template>
  <div class="content">
    <div>
      <button ref="reference">
        参考元素向下
      </button>
      <ul ref="floating" :style="floatingStyles">
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
      </ul>
    </div>
    <div>
      <button ref="referenceTop">
        参考元素向上
      </button>
      <ul ref="floatingTop" :style="floatingTopStyles">
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
      </ul>
    </div>
    <div>
      <button ref="referenceLeft">
        参考元素向左
      </button>
      <ul ref="floatingLeft" :style="floatingLeftStyles">
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
      </ul>
    </div>
    <div>
      <button ref="referenceRight">
        参考元素向右
      </button>
      <ul ref="floatingRight" :style="floatingRightStyles">
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
        <li>浮动元素内容</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.content {
    display: flex;
    width: 100vw;
    height: 1000px;
    padding-top: 300px;
}
.content > div {
    width: 20%;
    height: 500px;
}
ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
}

ul {
    border: 1px solid #ccc;
    text-align: center;
}
</style>
