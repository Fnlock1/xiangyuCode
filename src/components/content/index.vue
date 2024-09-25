<template>
  <div>
    <div
         class="bg-[#f2f2f2] h-100vh"

    >
      <div  style="width: 100%; overflow: hidden; transform: scale(.95) translate(0px, 0px); transform-origin: top left;"
            id="previewArea"
            class="bg-white min-h-100vh max-h-fit"
      >
        <!-- 左侧列表 -->
        <div v-for="(element, index) in renderViewList"
             :class="element?.class.includes('clickContainer') ? 'clickContainer' : '' "
             @click.self="clickContainer(element, 'clickContainer')"
        >
          <vue-draggable
              v-model="renderViewList[index].children"
              group="shared"
              @add="add"
              @end="DragEnd"
              ghost-class="ghost"
              :key="element.id"
              :style="element.styleOptions"
              :class="element.class"

          >
            <div
                v-for="(item, col) in element.children" :key="item.id">
              <div
                  @click="clickItem(item)"
                  :class="item.class"
                  :style="item.styleOptions" >
                <GetComponent
                    v-model:scriptSetup="item.scriptSetup"
                    v-model:vFor="item.vFor"
                    v-model:name="item.name" />
              </div>
            </div>
          </vue-draggable>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus';
import {onMounted, ref} from 'vue';
import { v4 as uuidv4 } from 'uuid';
import GetComponent from "@/components/getComponent/index.vue";
import { clickContainer as clickContainers2Utils } from "@/utils";
import type { renderViewList as RenderViewListType, renderViewListItem as RenderViewListItemType } from "@/utils/type";

// 创建响应式数据
const renderViewList = defineModel('renderViewList') as Ref<RenderViewListType>;
let scale = .95;
let translateX = 0;
let translateY = 0;
let isDragging = false;
let startX, startY;


function clickItem(item){
  clearAllClass()
  renderViewList.value = renderViewList.value.map(el => {
    el.children.map(x=>{
      if (x.class.includes('clickContainer')) {
        x.class = x.class.filter(cls => cls !== 'clickContainer');
      }
      if (x.id === item.id){
        x.class.push('clickContainer')
      }
      return x
    })
    return el
  });
}

// 处理点击容器
function clickContainer(element: RenderViewListItemType, className: string): void {
  clearAllClass()

  const updatedList = renderViewList.value.map(el => {

    const updatedClass = el.class.filter(cls => cls !== className);
    if (el.id === element.id) {
      updatedClass.push(className);
    }
    return { ...el, class: updatedClass };
  });
  // 更新模型或状态
  renderViewList.value = updatedList;
}

// 添加拖拽项的处理函数
function add(event) {
}

function DragEnd() {
  isDragging = false
}




onMounted(()=>{
  const previewArea = document.getElementById('previewArea')




// 监听滚轮事件
  previewArea.addEventListener('wheel', function (event) {
    event.preventDefault(); // 阻止默认页面的滚轮缩放行为

    if (event.ctrlKey) {
      // 按住 Ctrl 键时调整缩放比例
      if (event.deltaY > 0) {
        scale = Math.max(0.1, scale - 0.1); // 缩小，限制最小为 0.1
      } else {
        scale = Math.min(3, scale + 0.1); // 放大，限制最大为 3
      }

      // 更新预览区的缩放效果
      previewArea.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    } else {
      // 未按住 Ctrl 键时上下滚动内容
      translateY -= event.deltaY; // 滚轮上滚为负，下滚为正
      previewArea.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    }
  });

// 监听鼠标按下事件，开始拖动
  previewArea.addEventListener('mousedown', function (event) {
    isDragging = true;
    startX = event.clientX - translateX;
    startY = event.clientY - translateY;
    previewArea.style.cursor = 'grabbing';  // 修改鼠标样式
  });

// 监听鼠标移动事件，拖动内容
  window.addEventListener('mousemove', function (event) {
    if (isDragging) {
      translateX = event.clientX - startX;
      translateY = event.clientY - startY;
      previewArea.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    }
  });

// 监听鼠标松开事件，停止拖动
  window.addEventListener('mouseup', function () {
    isDragging = false;
    previewArea.style.cursor = 'default';  // 恢复鼠标样式
  });

})

function clearAllClass() {
  renderViewList.value = renderViewList.value.map(el => {
    el.class = el.class.filter(cls => cls !== 'clickContainer');
    el.children.map(x=>{
      if (x.class.includes('clickContainer')) {
        x.class = x.class.filter(cls => cls !== 'clickContainer');
      }
    })
    return el
  })
}


</script>

<style scoped>
/* 定义拖拽过程中的样式 */
.ghost {
  opacity: 0.5;
}
</style>
