#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages/vue" && pwd)
DOCS_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../docs" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: pnpm gen \${name} with no space"
  exit 1
fi

INPUT_NAME=$NAME

# 转成大写驼峰
NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

DIRNAME="$FILE_PATH/src/$NAME"

# 1.判断组件是否存在
if [ -d "$DIRNAME" ]; then
  echo "$INPUT_NAME 组件已经存在, 请更换后再试"
  exit 1
fi

############## 2.生成核心文件模版
mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/__tests__"

cat > "${DIRNAME}/${NAME}.vue" <<EOF
<script lang='ts' setup>
// init here
</script>
<template>
  <${NAME}>
    <slot></slot>
  </${NAME}>
</template>
EOF

cat > $DIRNAME/index.ts <<EOF
export {
  default as ${NAME},
} from './${NAME}.vue'
EOF
############## 2.生成核心文件

##############  3.生成测试用例模版
cat > $DIRNAME/__tests__/$NAME.vue <<EOF
<script setup lang="ts">
import { ref } from 'vue'
import { $NAME } from '@/$NAME'

</script>
<template>
  <${NAME}>
    <div>组件运行</div>
  </${NAME}>
</template>
EOF

cat > $DIRNAME/__tests__/index.test.ts <<EOF
import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import $NAME from './${NAME}.vue'
import type { VueWrapper } from '@vue/test-utils'

describe('$NAME Component', () => {
  let wrapper: VueWrapper<InstanceType<typeof $NAME>>
  beforeEach(() => {
    wrapper = mount($NAME, { attachTo: document.body })
  })

  it('测试 $NAME 组件是否渲染成功', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
EOF
############## 3.生成测试用例

##############  4.生成文档模版

cat > $DOCS_PATH/components/$NAME.md <<EOF
---
title: $NAME
---

# $NAME


## 基础用法
EOF

##############  4.生成文档模版

##############  5.在入口 index.ts 中追加导出
echo "export * from './$NAME'" >> $FILE_PATH/src/index.ts
##############  5.在入口 index.ts 中追加导出
