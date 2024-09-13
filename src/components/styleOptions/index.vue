<template>


  <codemirror v-model="curDataString" placeholder="Code goes here..." :style="{ height: '100%' }" :autofocus="true"
              :tabSize="1" :extensions="extensions" />
</template>

<script lang="ts" setup>
import { Codemirror } from "vue-codemirror";
import { css } from "@codemirror/lang-css";
import { ref, watch } from "vue";
import { EditorView } from "@codemirror/view";

// 定义变量
let curData = ref({});
let curDataString = ref('');

let renderViewList = defineModel('renderViewList');

// 监听 renderViewList 的变化
watch(renderViewList, (newValue) => {
  const matchedItems = newValue.filter(x => x.class.includes('clickContainer'));
  console.log(renderViewList);
  if (matchedItems.length > 0) {
    curData.value = matchedItems[0];
    curDataString.value = `{ ${convertToCssString(curData.value.styleOptions)} }`; // 将对象转换为带花括号的CSS样式字符串
  } else {
    curData.value = {};
    curDataString.value = ''; // 如果没有匹配项，重置 curDataString
  }
});

watch(curDataString, (newValue) => {
  // console.log(curData.value.styleOptions);
  curData.value.styleOptions = parseCssString(newValue);
})

// 将对象转换为 CSS 样式字符串的函数
// 将对象转换为格式化的 CSS 样式字符串的函数
function convertToCssString(styleOptions) {
  return Object.entries(styleOptions)
      .map(([key, value]) => `  ${key}: ${value};`) // 每对属性-值放在新的一行并添加两个空格的缩进
      .join('\n') + '\n'; // 每对属性-值对用换行符分隔，确保最后一对后有换行符
}


// string->obj
function parseCssString(cssString: string): Record<string, string> {
  // 去除首尾的花括号和空格
  let cleanString = cssString.trim().replace(/^\{\s*|\s*\}$/g, '');

  // 用分号分割每个样式声明
  let styleArray = cleanString.split(';').filter(Boolean);

  // 创建样式对象
  let styleObject: Record<string, string> = {};

  // 遍历每个样式声明并填充对象
  styleArray.forEach(style => {
    let [key, value] = style.split(':').map(s => s.trim());
    if (key && value) {
      // 使用 kebab-case 属性名作为键
      styleObject[key] = value;
    }
  });

  return styleObject;
}


// 监听 curDataString 的变化，更新 curData

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
    color: '#FFFFFF'
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
