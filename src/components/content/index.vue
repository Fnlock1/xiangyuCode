<template>
  <div class="bg-[#f2f2f2] h-100vh"
       @mousedown="startDrag"
       @mousemove="onDrag"
       @mouseup="stopDrag"
       @mouseleave="stopDrag"
       @wheel="onWheel"> <!-- 监听滚动事件 -->
    <div
        :style="previewAreaStyle"
        id="previewArea"
        class="bg-white min-h-100vh max-h-fit"
        @wheel.stop.prevent="onWheel"
    >
    <!-- 递归渲染 -->
    <RenderContainer
        v-for="(element, index) in renderViewList"
        :key="element.id"
        :element="element"
        @click-container="clickContainer"
        @click-item="clickItem"
        @drag-start="onContainerDragStart"
        @drag-end="onContainerDragEnd"
    />
  </div>
  </div>

  <iframe id="preview" style="width: 500px;height: 300px;"></iframe>
</template>
<script setup>
import {ref, computed, onMounted,watch} from 'vue';
import RenderContainer from './RenderContainer.vue';  // 递归组件

// 响应式数据：存储渲染的视图列表
const renderViewList = defineModel('renderViewList');

// 画布缩放和拖拽状态
let scale = 0.95;
let translateX = ref(0);
let translateY = ref(0);
let isDragging = ref(false);
let startX = 0;
let startY = 0;
let isContainerDragging = ref(false); // 标记拖拽组件是否正在被拖拽
let html = ref('')

watch(renderViewList,(v)=>{
//   let content = document.getElementById('previewArea');
//   let preview = document.getElementById('preview');
//
// // 获取所有 <style> 标签
//   let styles = Array.from(document.getElementsByTagName('style')).map(style => style.outerHTML);
//
// // 获取所有 <link> 标签（例如，外部 CSS 文件）
//   let links = Array.from(document.getElementsByTagName('link')).map(link => link.outerHTML);
//
// // 创建一个包含 Unocss 样式和 HTML 内容的完整 HTML 字符串
//   let html = `
// <!DOCTYPE html>
// <html>
// <head>
//     ${links.join('\n')} <!-- 引入所有的 link 标签 -->
//     ${styles.join('\n')} <!-- 引入所有的 style 标签 -->
// </head>
// <body>
//     ${content.innerHTML} <!-- 你的内容 -->
// </body>
// </html>
// `;
//
// // 将 HTML 字符串设置为 iframe 的 srcdoc
//   preview.srcdoc = html;

    // html.value =generateTemplate(renderViewList.value)

})


// 拖拽相关逻辑
function startDrag(event) {
  if (isContainerDragging.value) return; // 如果拖拽组件正在拖拽，禁止画布拖动
  isDragging.value = true;
  startX = event.clientX - translateX.value;
  startY = event.clientY - translateY.value;
}

function onDrag(event) {
  if (isDragging.value) {
    translateX.value = event.clientX - startX;
    translateY.value = event.clientY - startY;
  }
}

function stopDrag() {
  isDragging.value = false;
}

// 计算预览区域样式
const previewAreaStyle = computed(() => ({
  transform: `scale(${scale}) translate(${translateX.value}px, ${translateY.value}px)`,
  transformOrigin: 'top left',
}));

// 拖拽组件开始和结束事件
function onContainerDragStart() {
  isContainerDragging.value = true; // 开始拖拽组件时，禁用画布拖拽
}

function onContainerDragEnd() {
  isContainerDragging.value = false; // 结束拖拽组件时，恢复画布拖拽
}

// 处理滚动逻辑
function onWheel(event) {
  // 阻止默认的外层滚动行为
  event.preventDefault();

  // 垂直滚动：调整 translateY
  if (event.deltaY !== 0) {
    translateY.value += event.deltaY;
  }
  // 水平滚动：调整 translateX
  if (event.deltaX !== 0) {
    translateX.value += event.deltaX;
  }
}

onMounted(()=>{



})

// 生成模板部分（递归）
function generateTemplate(data) {
  let html = '';
  data.forEach(component => {
    // console.log(component.name)
    // 处理组件类型
    const tag = component.name || 'div';

    // 处理类名
    let classNames = (component.class || []).join(' ');
    let id = component.id || '';
    const vFor = component.vFor ? `v-for="item in items" :key="item.id"` : '';

    // props 进行总的拼接
    let props = ''
    let content = ''
    let propsNotShow = ['class', 'id']
    if (component.isComponent === false) { // 他这个是原生的组件
      content = component?.render?.children === undefined ?'' :component?.render?.children
    }

    if (component.props) {
      for (const key in component.props) {

        if (key === 'class') {
          classNames += ` ${component.props[key].default}`
        } else if (key === 'id') {
          id = component.props[key].default
        } else {
          props += `${key}='${component.props[key].default}' `
        }
      }
    }

    // 生成当前节点的 HTML
    html += `<${tag} class="${classNames}" id="${id}" ${vFor} ${props}`;

    // 处理事件绑定
    if (component.scriptSetup) {
      component.scriptSetup.forEach(event => {
        // 动态绑定事件
        html += ` @${event.type}="${event.name}()"`;
      });
    }
    console.log(component.isComponent,component.render)
    // 关闭标签
    html += `>${content}`;

    // 如果有子组件，递归生成
    if (component.children) {
      html += generateTemplate(component.children);
    }

    // 关闭标签
    html += `</${tag}>\n`;
  });
  return html;
}

</script>
<style scoped>
.ghost {
  opacity: 0.5;
}
</style>
