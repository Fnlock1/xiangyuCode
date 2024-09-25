<script setup lang="ts">
import {clearAllClass} from "@/utils/index.ts";
import {onMounted, ref, watch} from "vue";
import {tagList} from "@/utils/elementType";
let renderViewList = defineModel('renderViewList')

let menuVisible = ref(false);
let menuTop = ref(0);
let menuLeft = ref(0);
let curData =ref(null)
// 获取当前在哪个数据
function handleItemHeaderClick(itemOrElement, className = 'clickContainer') {
  clearAllClass(renderViewList); // 清除所有元素的类
  renderViewList.value = renderViewList.value.map(el => {
    // 检查 el 是否包含 children，如果有，则需要遍历子元素
    if (el.children) {
      el.children = el.children.map(child => {
        // 移除子元素的 clickContainer 类
        child.class = child.class.filter(cls => cls !== className);
        // 如果子元素的 id 匹配，添加 clickContainer 类
        if (child.id === itemOrElement.name) {
          child.class.push(className);
        }
        return child;
      });
    }
    // 移除当前元素的 clickContainer 类
    el.class = el.class.filter(cls => cls !== className);
    // 如果当前元素的 id 匹配，添加 clickContainer 类
    if (el.id === itemOrElement.name) {
      el.class.push(className);
    }
    return el;
  });
}


function mouseMove(item) {
  let layers = document.querySelectorAll('.layers')
  layers.forEach(x => {
    x.addEventListener('mousemove', (e) => {
      curData.value = item
    })
  })
}

// 显示右键菜单
function showContextMenu(event: MouseEvent) {
  event.preventDefault(); // 阻止默认右键菜单
  menuVisible.value = true;
  menuTop.value = event.clientY; // 获取鼠标Y坐标
  menuLeft.value = event.clientX; // 获取鼠标X坐标
}

// 隐藏右键菜单
function hideContextMenu() {
  menuVisible.value = false;
}

// 处理菜单项点击
function handleMenuAction(action: string) {
  console.log(`执行: ${action}`);
  hideContextMenu(); // 隐藏菜单
}


</script>

<template>

  <n-collapse
      @item-header-click="handleItemHeaderClick" class="mt-4  ">
    <div class="layers" @contextmenu="showContextMenu">
      <n-collapse-item
          @mousemove="mouseMove(item)"
          :name="item.id" v-for="(item,index) in renderViewList" title="div">
        <n-collapse-item
            @mousemove="mouseMove(item)"
            :name="item.id" :title="item.name" v-for="(item,index) in item.children"></n-collapse-item>
      </n-collapse-item>
    </div>
<!--    <div-->
<!--        :style="{-->
<!--          left: left + 'px',-->
<!--          top: top + 'px',-->
<!--        }"-->
<!--        class="addDom"></div>-->


    <!-- 自定义右键菜单 -->
    <div v-if="menuVisible" :style="{ top: menuTop + 'px', left: menuLeft + 'px' }"
         class="context-menu rounded-lg">
      <ul>
        <li @click="handleMenuAction('功能 1')">Add Section</li>
        <li @click="handleMenuAction('功能 2')">Del Section</li>
      </ul>
<!--      自定义组件-->
      <div class="cusComponents">
        <h3>Cus Components🎉🎉</h3>

        <n-tabs type="line" animated>
          <n-tab-pane name="element" tab="element">
           <div class="flex flex-col gap-2 h40vh  overflow-y-scroll">
             <div class="elementItem" v-for="(item,index) in tagList">{{ item.tagName }}</div>
           </div>
          </n-tab-pane>

        </n-tabs>
      </div>
    </div>
  </n-collapse>

</template>

<style scoped>
.layers {

}

.layers:hover ~ .addDom {
  display: block
}

.addDom {
  display: none;
  position: absolute;
  width: 10%;
  height: 2px;
  background: #18a058;
  border-radius: 2px;
}


.context-menu {
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.context-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.context-menu li {
  padding: 8px 12px;
  cursor: pointer;
}

.context-menu li:hover {
  background: #f0f0f0;
}

.cusComponents{
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(110%,0);
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: .5em;
  border-radius: 10px;
  width: 20vw;
}

.elementItem{
  padding: .5em;
  transition: all .2s ease-in-out;
  border-radius: 10px;
}
.elementItem:hover{
  background: #18a058;
  color: white;
  cursor: pointer;
}


</style>
