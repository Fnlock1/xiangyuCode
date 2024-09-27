<template>
  <n-tabs type="segment" animated class="h100% siyuan">
    <n-tab-pane name="Class" tab="class">
      <autoInputUnocss v-model:curData="curData"></autoInputUnocss>
      <div class="flex gap-3 flex-wrap p-4">
        <n-tag v-for="(item, index) in curData?.class"
               closable
               @close="delClass(item, index)"
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
      <div v-if="curData" >
        <h3 class="p2">props</h3>
        <div class="p-2 flex justify-between" v-for="(item,index) in curData.props"
        >
          <span v-if="item.type">
            {{item.desc}}
          </span>
          <span v-if="item.type">
            <n-input
                @change="updateRender"
                @keydown.enter="updateRender"
                type="text" v-model:value="item.default" placeholder="please input value" />
          </span>
        </div>

        <h3 class="p-2">bind Event</h3>
        <div class="flex gap-3 p-2">
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
import {ref, watch, defineProps, withDefaults, h} from "vue";
import {EditorView} from "@codemirror/view";
import autoInputUnocss from "@/components/autoInputUnocss/index.vue"
import {vueEvents} from "@/utils";
import {getSelectedItem} from "@/utils/dsl"

const curData = ref({
  class: [],
  styleOptions: {},
  scriptSetup: []
});
const curDataString = ref('');
const renderViewList = defineModel('renderViewList');
let funName = ref('');
let eventName = ref('');
let vFor = ref(1);


watch(vFor, () => {
  if (curData.value) {
    curData.value.vFor = vFor.value;
  }
});

watch(renderViewList, (newValue) => {
  let matchedItem = getSelectedItem(renderViewList)
  if (!matchedItem) {
    newValue.forEach(x => {
      x.children.forEach(y => {
        if (y.class.includes('clickContainer')) {
          matchedItem = y;
        }
      });
    });
    console.log(curData.value)
  }

  curData.value = matchedItem || { class: [], styleOptions: {}, scriptSetup: [] };
  curDataString.value = matchedItem ? `{ ${convertToCssString(curData.value.styleOptions)} }` : '';
});

watch(curDataString, (newValue) => {
  if (curData.value) {
    curData.value.styleOptions = curData.value.styleOptions || {};
    curData.value.styleOptions = parseCssString(newValue);

  }
});


function updateRender() {
  let tagName = curData.value.render.type
  let props = curData.value.props
  let attributes = {}
  for (let y in  props){
    if (props[y].type) {
      attributes[y] = props[y].default
    }
  }
  curData.value.render = h(tagName,attributes,props.content.default)
  console.log(curData.value)
}

const convertToCssString = (styleOptions) =>
    Object.entries(styleOptions)
        .map(([key, value]) => `  ${key}: ${value};`)
        .join('\n') + '\n';

const parseCssString = (cssString) => {
  const cleanString = cssString.trim().replace(/^\{\s*|\s*\}$/g, '');
  return Object.fromEntries(cleanString.split(';').filter(Boolean).map(style => {
    const [key, value] = style.split(':').map(s => s.trim());
    return key && value ? [key, value] : null;
  }).filter(Boolean));
};

const myTheme = EditorView.theme({
  "&": { color: "#0052D9", backgroundColor: "#FFFFFF" },
  ".cm-content": { caretColor: "#0052D9" },
  ".cm-activeLine, .cm-activeLineGutter": { backgroundColor: "#FAFAFA" },
  "&.cm-focused .cm-cursor": { borderLeftColor: "#0052D9" },
  "&.cm-focused .cm-selectionBackground, ::selection": { backgroundColor: "#0052D9", color: '#FFFFFF' },
  ".cm-gutters": { backgroundColor: "#FFFFFF", color: "#ddd", border: "none" }
}, { dark: false });

const props = withDefaults(defineProps<{ height?: string }>(), { height: '400px' });
const extensions = [css(), myTheme];

function delClass(item, index) {
  if (curData.value && curData.value.class) {
    curData.value.class.splice(index, 1);
  }
}

function eventMessage(name) {
  if (!eventName.value) {
    alert('EventType 不能为空');
    return;
  }

  if (!name) {
    alert('FunctionName 不能为空');
    return;
  }

  curData.value.scriptSetup.push({
    type: eventName.value,
    name: name
  });
  eventName.value = '';
  funName.value = '';
}

function deleteEvent(index) {
  curData.value.scriptSetup.splice(index, 1);
}
</script>
