<template>

  <n-tabs type="segment" animated class="h100% siyuan">
    <n-tab-pane name="Class" tab="class">
      <autoInputUnocss v-model:curData="curData"></autoInputUnocss>
      <div class="flex gap-3 flex-wrap p-4">
        <n-tag v-for="(item,index) in curData?.class"
               closable
               @close="delClass(item,index)"
               type="success">{{ item }}
        </n-tag>
      </div>
    </n-tab-pane>
    <n-tab-pane name="Style" tab="style">
      <codemirror
          v-model="curDataString"
          placeholder="Code goes here..."
          :style="{ height: '100%' }"
          :autofocus="true"
          :tabSize="1"
          :extensions="extensions"
      />
    </n-tab-pane>
    <n-tab-pane name="attr" tab="attr">
      <!--      一些其他操作-->
      <div v-if="curData">
<!--        <div class="p2">-->
<!--          <h3>V-for</h3>-->
<!--&lt;!&ndash;          数字上下&ndash;&gt;-->
<!--          <n-input-number class="mt-2" v-model:value="vFor"></n-input-number>-->
<!--        </div>-->
        <h3 class="p-2" >bind Event</h3>
        <div class="flex gap-3 p-2" >
          <n-select placeholder="please select EventType"
                    :options="vueEvents" v-model:value="eventName"></n-select>
          <n-input
              v-model:value="funName"
              @keydown.enter="eventMessage(funName)"
              placeholder="please input function Name"></n-input>
        </div>
        <h3 class="p-2">Method List</h3>
        <div v-for="(item, index) in curData.scriptSetup" :key="index" class="p-2">
          <n-card class="mb-2" style="border-radius: 8px; background-color: #f9f9f9">
            <template #header>
              <div class="flex justify-between items-center">
                <div>
                  {{ index + 1 }}: EventType:
                  <n-tag type="info" class="ml-2">{{ item.type }}</n-tag>
                  FunctionName:
                  <n-tag type="success" class="ml-2">{{ item.name }}</n-tag>
                </div>
                <n-button ghost type="error" size="small" @click="deleteEvent(index)">删除</n-button>
              </div>
            </template>
          </n-card>
        </div>
        <n-empty v-if="curData.scriptSetup.length === 0" description="method List Length === 0"></n-empty>

      </div>

      <div>
        <n-empty v-if="!curData" description="please select Element" class="mt-12"></n-empty>
      </div>
    </n-tab-pane>
  </n-tabs>
</template>

<script lang="ts" setup>
import {Codemirror} from "vue-codemirror";
import {css} from "@codemirror/lang-css";
import {ref, watch, defineProps, withDefaults} from "vue";
import {EditorView} from "@codemirror/view";
import autoInputUnocss from "@/components/autoInputUnocss/index.vue"
import {vueEvents} from "@/utils";

// 定义变量
const curData = ref(undefined);
const curDataString = ref('');
const renderViewList = defineModel('renderViewList');
let funName = ref('')
let eventName = ref('')
let vFor =ref(1)

watch(vFor,()=>{
  curData.value.vFor = vFor.value
})

// 监听 renderViewList 的变化
watch(renderViewList, (newValue) => {
  let matchedItem = newValue.find(x => x.class.includes('clickContainer'));
  if (!matchedItem) {
    newValue.forEach(x => {
      x.children.forEach(y => {
        if (y.class.includes('clickContainer')) {
          matchedItem = y
        }
      })
    })
  }

  curData.value = matchedItem || undefined;
  curDataString.value = matchedItem ? `{ ${convertToCssString(curData.value.styleOptions)} }` : '';
});

// 监听 curDataString 的变化
watch(curDataString, (newValue) => {
  curData.value.styleOptions = parseCssString(newValue);
});

// 将对象转换为 CSS 样式字符串
const convertToCssString = (styleOptions) =>
    Object.entries(styleOptions)
        .map(([key, value]) => `  ${key}: ${value};`)
        .join('\n') + '\n';

// 解析 CSS 字符串为对象
const parseCssString = (cssString) => {
  const cleanString = cssString.trim().replace(/^\{\s*|\s*\}$/g, '');
  return Object.fromEntries(cleanString.split(';').filter(Boolean).map(style => {
    const [key, value] = style.split(':').map(s => s.trim());
    return key && value ? [key, value] : null;
  }).filter(Boolean));
};

// 编辑器主题配置
const myTheme = EditorView.theme({
  "&": {color: "#0052D9", backgroundColor: "#FFFFFF"},
  ".cm-content": {caretColor: "#0052D9"},
  ".cm-activeLine, .cm-activeLineGutter": {backgroundColor: "#FAFAFA"},
  "&.cm-focused .cm-cursor": {borderLeftColor: "#0052D9"},
  "&.cm-focused .cm-selectionBackground, ::selection": {backgroundColor: "#0052D9", color: '#FFFFFF'},
  ".cm-gutters": {backgroundColor: "#FFFFFF", color: "#ddd", border: "none"}
}, {dark: false});

const props = withDefaults(defineProps<{ height?: string }>(), {height: '400px'});
const extensions = [css(), myTheme];

function delClass(item, index) {
  curData.value.class.splice(index, 1)
}


function eventMessage(name) {
  if (!eventName.value) {
    // 判断 eventName 是否为空，显示错误消息
    alert('EventType 不能为空');
    return;
  }

  if (!name) {
    // 判断 funName 是否为空，显示错误消息
    alert('FunctionName 不能为空');
    return;
  }
      curData.value.scriptSetup.push({
        type:eventName.value,
        name:name
      })
  eventName.value = ''
  funName.value = ''
}

function deleteEvent(index) {
  curData.value.scriptSetup.splice(index, 1); // 删除对应索引的事件
}

</script>

<style>
.n-tabs .n-tabs-rail .n-tabs-capsule {
  background: #18a058;
  color: white !important;
}

.n-tabs .n-tabs-rail .n-tabs-tab-wrapper .n-tabs-tab.n-tabs-tab--active {
  color: white;
}
</style>
