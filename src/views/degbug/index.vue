<template>
  <div class="container">
    <!-- 左边效果展示区 -->
    <div class="preview">
      <iframe ref="iframe" class="iframe" />
    </div>

    <!-- 右边代码编辑器 -->
    <div class="editor">
      <textarea v-model="code" class="textarea"></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {parse} from '@vue/compiler-sfc'; // 使用 parse 而不是 compile
import {text} from "./index.js"

const code = ref(text);

function compileTemplate(template) {
  const { descriptor } = parse(template);
  console.log(descriptor)
  const { scriptSetup, template: tpl } = descriptor;

  // 生成渲染函数
  return new Function('Vue', `
    const { h } = Vue;
    const { createApp } = Vue;
    return ${tpl.content};
  `);
}

// 使用 AST 渲染组件
const renderFunction = compileTemplate(code.value);
console.log(renderFunction);

</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}
.preview {
  flex: 1;
  border-right: 1px solid #ccc;
}
.editor {
  flex: 1;
}
.textarea {
  width: 100%;
  height: 100%;
  border: none;
  padding: 10px;
  font-family: monospace;
  font-size: 14px;
}
.iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
