#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages/vue" && pwd)
DOCS_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../docs" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: pnpm gen \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/src/$NAME"
INPUT_NAME=$NAME

# 1.判断组件是否存在
if [ -d "$DIRNAME" ]; then
  echo "$NAME 组件已经存在, 请更换后再试"
  exit 1
fi

NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

############## 2.生成核心文件模版
mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/index.ts"
mkdir -p "$DIRNAME/__tests__"

cat > $DIRNAME/src/$INPUT_NAME.vue <<EOF
<script lang='ts' setup>
// init here
</script>
<template>
  ${INPUT_NAME}
    <slot></slot>
  ${INPUT_NAME}
</template>
EOF

cat > $DIRNAME/index.ts <<EOF
export {
  default as ${INPUT_NAME},
} from './${INPUT_NAME}.vue'
EOF
############## 2.生成核心文件

##############  3.生成测试用例模版
cat > $DIRNAME/__tests__/${INPUT_NAME}.vue <<EOF
<template>
  <${INPUT_NAME}>
    <div>组件运行</div>
  </${INPUT_NAME}>
</template>
EOF

cat > $DIRNAME/__tests__/index.test.ts <<EOF
import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import $NAME from './${INPUT_NAME}.vue'
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
mkdir -p "$DIRNAME/components/$INPUT_NAME"

cat > $DOCS_PATH/components/$INPUT_NAME/index.md <<EOF
---
title: $INPUT_NAME
---

# $INPUT_NAME


## 基础用法
EOF

##############  4.生成文档模版
