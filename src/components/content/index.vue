<template>
  <div>
    <!-- 左侧列表 -->
    <div v-for="(element, index) in renderViewList"
         :class="element.class"
         :key="element.id"
         @click="clickContainer(element, 'clickContainer')">
      <vue-draggable
          v-model="renderViewList[index].children"
          group="shared"
          @add="add"
          ghost-class="ghost"
          :style="element.styleOptions"
      >
        <div v-for="(item, col) in element.children" :key="item.id">
          <div :style="item.styleOptions">
            <GetComponent v-model:name="item.name" />
          </div>
        </div>
      </vue-draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import GetComponent from "@/components/getComponent/index.vue";
import { clickContainer as clickContainers2Utils } from "@/utils";
import type { renderViewList as RenderViewListType, renderViewListItem as RenderViewListItemType } from "@/utils/type";

// 创建响应式数据
const renderViewList = defineModel('renderViewList') as Ref<RenderViewListType>;

// 处理点击容器
function clickContainer(element: RenderViewListItemType, className: string): void {
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
  console.log('Item added:', event);
}

</script>

<style scoped>
/* 定义拖拽过程中的样式 */
.ghost {
  opacity: 0.5;
}
</style>
