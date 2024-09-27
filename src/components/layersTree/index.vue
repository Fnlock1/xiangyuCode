<script setup lang="js">
import { clearAllClass } from "@/utils/index.ts";
import { onMounted, ref } from "vue";
import { materialXy, tagList } from "@/utils/elementType.ts";
import { delId, getById } from "@/utils/dsl";
import { v4 as uuidv4 } from "uuid";
import RecursiveItem from "@/components/layersTree/RecursiveItem.vue";

let renderViewList = defineModel("renderViewList");
let menuVisible = ref(false);
let menuTop = ref(0);
let menuLeft = ref(0);
let curData = ref(null);
materialXy.use(tagList);
let elementList = ref(materialXy.plugins[0]);

// 获取当前在哪个数据
function handleItemHeaderClick(itemOrElement, className = "clickContainer") {
  clearAllClass(renderViewList);

  function recursiveHandleItem(list) {
    return list.map((el) => {
      el.class = el.class.filter((cls) => cls !== className);
      if (el.id === itemOrElement.name) {
        el.class.push(className);
      }
      if (el.children) {
        el.children = recursiveHandleItem(el.children);
      }
      return el;
    });
  }

  renderViewList.value = recursiveHandleItem(renderViewList.value);
}

// 鼠标移动事件
function mouseMove() {
  let collapseItem = document.querySelectorAll(".collapseX");
  collapseItem.forEach((x) => {
    x.addEventListener("mousemove", (e) => {
      if (!menuVisible.value){
        curData.value = getById(x.dataset.id, renderViewList);
      }
    });
  });
}

// 显示右键菜单
function showContextMenu(event) {
  event.preventDefault();
  menuVisible.value = true;
  menuTop.value = event.clientY;
  menuLeft.value = event.clientX;
}

// 隐藏右键菜单
function hideContextMenu() {
  menuVisible.value = false;
}

// 处理右键菜单项点击
function handleMenuAction(action) {
  if (action === "delete") {
    delId(curData.value.id, renderViewList);
    mouseMove();
  }
  hideContextMenu();
}

// 添加元素
function addElement(item) {
  function recursiveAddElement(list) {
    return list.map((el) => {
      if (el.id === curData.value.id && !el.isComponent) {
        if (!el.children) el.children = [];
        el.children.push({
          class: [],
          isComponent: false,
          render: item.render,
          name: item.name,
          props: item.attributes,
          scriptSetup: [],
          styleOptions: {},
          vFor: "1",
          id: uuidv4(),
          children: []
        });
      }
      if (el.children && el.children.length) {
        el.children = recursiveAddElement(el.children);
      }
      return el;
    });
  }

  renderViewList.value = recursiveAddElement(renderViewList.value);
  menuVisible.value = false;
  mouseMove();
}

// 组件挂载时绑定鼠标事件
onMounted(() => {
  mouseMove();
});
</script>


<template>
  {{curData?.id}}
  <n-collapse @item-header-click="handleItemHeaderClick" class="mt-4">
    <div class="layers" @contextmenu="showContextMenu">
      <recursive-item @mousemove="mouseMove"  v-for="(item, index) in renderViewList" :key="item.id" :item="item" />
    </div>
  </n-collapse>

  <!-- 自定义右键菜单 -->
  <div v-if="menuVisible" :style="{ top: menuTop + 'px', left: menuLeft + 'px' }" class="context-menu rounded-lg">
    <ul>
      <li @click="handleMenuAction('add')">Close</li>
      <li @click="handleMenuAction('delete')">Del Section</li>
    </ul>

    <div class="cusComponents">
      <h3>Cus Element🎉🎉</h3>
      <n-tabs type="line" animated>
        <n-tab-pane name="element" tab="element">
          <div class="flex flex-col gap-2 h40vh overflow-y-scroll">
            <div
                class="elementItem"
                @click="addElement(item)"
                v-for="(item, index) in elementList"
                :key="item.id"
            >
              {{ item.name }}
            </div>
          </div>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>



<style scoped>
.layers {
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

.cusComponents {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(110%, 0);
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 0.5em;
  border-radius: 10px;
  width: 20vw;
}

.elementItem {
  padding: 0.5em;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
}

.elementItem:hover {
  background: #18a058;
  color: white;
  cursor: pointer;
}
</style>

