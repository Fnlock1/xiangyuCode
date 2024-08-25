<script setup>
import { ref, onMounted } from 'vue'

// 引入 Monaco Editor
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'


// 在组件挂载后执行
onMounted(() => {
  const editor = monaco.editor.create(document.querySelector('.editor-container'), {
    value: '{background:red}',
    language: 'css',
    theme:"vs-dark",
  });

})
</script>

<template>
  <div class="editor-container">
    <!-- 将编辑器容器绑定到 ref -->
    <div id="editor" ref="editor"></div>
  </div>
</template>

<style scoped>
.editor-container {
  width: 100%;
  height: 30vh;
  padding: 15px;
  background: #ffffff;
}
#editor {
  width: 100%;
  height: 100%;
}
</style>
