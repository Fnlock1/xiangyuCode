<template>
  <!-- :indent-with-tab="true" 是否自动获取焦点-->
  {{ curData }}
  ————————————————
  {{ curDataString }}

  <codemirror v-model="curDataString" placeholder="Code goes here..." :style="{ height: '100%' }" :autofocus="true"
              :tabSize="1" :extensions="extensions" />
</template>

<script lang="ts" setup>
import { Codemirror } from "vue-codemirror";
import { css } from "@codemirror/lang-css";
import { oneDark } from "@codemirror/theme-one-dark";
import { ref, watch } from "vue";
import { EditorView } from "@codemirror/view";

// 定义变量
let curData = ref({});
let curDataString = ref('');

let renderViewList = defineModel('renderViewList');

// 监听 renderViewList 的变化
watch(renderViewList.value, (newValue) => {
  const matchedItems = newValue.filter(x => x.class.includes('clickContainer'));
  if (matchedItems.length > 0) {
    curData.value = matchedItems[0];
    curDataString.value = `{ ${convertToCssString(curData.value.styleOptions)} }`; // 将对象转换为带花括号的CSS样式字符串
  } else {
    curData.value = {};
    curDataString.value = ''; // 如果没有匹配项，重置 curDataString
  }
});

// 将对象转换为 CSS 样式字符串的函数
function convertToCssString(styleOptions) {
  return Object.entries(styleOptions)
      .map(([key, value]) => `${key}: ${value};`)
      .join(' ');
}

// 监听 curDataString 的变化，更新 curData
watch(curDataString, (newValue) => {
  try {
    // 去除首尾花括号并转换为对象
    let cleanString = newValue.replace(/^{\s*|\s*}$/g, ''); // 去除花括号和多余的空格
    let styleArray = cleanString.split(';').filter(Boolean);
    let styleObject = {};

    styleArray.forEach(style => {
      let [key, value] = style.split(':').map(s => s.trim());
      if (key && value) {
        styleObject[key] = value;
      }
    });

    curData.value.styleOptions = styleObject;
  } catch (e) {
    console.error('Failed to parse CSS string:', e);
    curData.value.styleOptions = {}; // 解析失败时重置为对象
  }
});


// 编辑器主题配置
let myTheme = EditorView.theme({
  "&": {
    color: "#0052D9",
    backgroundColor: "#FFFFFF"
  },
  ".cm-content": {
    caretColor: "#0052D9",
  },
  ".cm-activeLine": {
    backgroundColor: "#FAFAFA"
  },
  ".cm-activeLineGutter": {
    backgroundColor: "#FAFAFA"
  },
  "&.cm-focused .cm-cursor": {
    borderLeftColor: "#0052D9"
  },
  "&.cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: "#0052D9",
    color:'#FFFFFF'
  },
  ".cm-gutters": {
    backgroundColor: "#FFFFFF",
    color: "#ddd",
    border: "none"
  }
}, { dark: false });

interface IProps {
  height?: string,
}

// 接受的参数
const props = withDefaults(defineProps<IProps>(), {
  height: '400px'
});

const code = ref(``);
const extensions = [css(), myTheme];
const Change = () => {};
</script>
