<template>
    <div ref="editorContainer" id="editor" style="width: 20vw;height: 200px"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import * as monaco from 'monaco-editor';
import customLanguage from '@/components/editor/custom-lang-monarch.js'; // 导入自定义CSS语言配置

const editorContainer = ref(null); // 使用 ref 来获取 DOM 元素
let editor = null;

onMounted(() => {
    // 注册自定义语言
    monaco.languages.register({ id: 'css' });

    // 定义自定义语言的语法规则
    monaco.languages.setMonarchTokensProvider('css', customLanguage);

    // 注册补全提供者
    monaco.languages.registerCompletionItemProvider('css', {
        provideCompletionItems: () => {
            return [
                {
                    label: 'color',
                    kind: monaco.languages.CompletionItemKind.Property,
                    insertText: 'color: ',
                    documentation: 'Sets the color of the text.'
                },
                {
                    label: 'background-color',
                    kind: monaco.languages.CompletionItemKind.Property,
                    insertText: 'background-color: ',
                    documentation: 'Sets the background color of an element.'
                }
                // 添加更多补全项
            ];
        }
    });

    // 创建编辑器实例
    editor = monaco.editor.create(editorContainer.value, {
        value: `/* 在这里输入你的CSS代码 */\n`,
        language: 'css',
        theme: 'vs-dark', // 选择你喜欢的主题
    });
});

onBeforeUnmount(() => {
    // 在组件销毁之前销毁编辑器实例
    if (editor) {
        editor.dispose();
    }
});

</script>

<style>
/* 样式保持不变 */
</style>
