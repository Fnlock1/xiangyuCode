<template>
    <div>
        <!-- 左侧列表 -->

          <div v-for="(element, index) in renderViewList"
               :class="element.class"
               :key="index" @click="clickContainer(renderViewList,element,index,'clickContainer')">
            <vue-draggable
                    v-model="renderViewList[index].children"
                    group="shared"
                    @add="add"
                    ghost-class="ghost"
                    :style="element.styleOptions"
            >
                <div v-for="(item, col) in element.children" :key="item.id">
                    <div :style="item.styleOptions">
                        <GetComponent v-model:name="item.name"></GetComponent>
                    </div>
                </div>
            </vue-draggable>
        </div>
    </div>
</template>

<script setup lang="ts">
import {VueDraggable} from 'vue-draggable-plus';
import {ref} from 'vue';
import {v4 as uuidv4} from 'uuid';
import GetComponent from "@/components/getComponent/index.vue";
import {clickContainer as clickContainers2Utils} from "@/utils";
import type {renderViewList, renderViewListItem} from "@/utils/type";
let renderViewList = defineModel('renderViewList')

function clickContainer(renderViewList: renderViewList, e: renderViewListItem, i: number, className: string): void {
  // 遍历 renderViewList，移除所有元素的 "clickContainer" 类名
  renderViewList.forEach(element => {
    element.class = element.class.filter(cls => cls !== className);
  });

  // 如果点击的元素没有 "clickContainer" 类名，则添加它
  if (!e.class.includes(className)) {
    e.class.push(className);
  }

  // 打印更新后的状态以验证是否正确
  console.log(renderViewList[i]);
}



</script>

<style scoped>
/* 定义拖拽过程中的样式 */
.ghost {
    opacity: 0.5;
}
</style>
