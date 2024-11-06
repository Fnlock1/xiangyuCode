<template>
  <div
      :class="element.class"
      @click.self="clickContainer(element, 'clickContainer')"
  >
    <vue-draggable
        v-model="element.children"
        group="shared"
        @add="add"
        @start="add"
        @end="DragEnd"
        ghost-class="ghost"
        :key="element.id"
    >
      <!-- 递归渲染子级 -->
      <div v-for="(item, col) in element.children"
           :class="item.class"

           :key="item.id">
        <div
            @click="clickItem(item)"
            :style="item.styleOptions"
        >
          <!-- 渲染组件 -->
          <GetComponent v-model:render="item.render" v-model:name="item.name" />
          <!-- 如果有子级则递归渲染 -->
          <RenderContainer
              v-if="item.children && item.children.length"
              :element="item"
              @click-container="clickContainer"
              @click-item="clickItem"
          />
        </div>
      </div>
    </vue-draggable>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import GetComponent from '@/components/getComponent/index.vue';

const props = defineProps({
  element: Object,
});

const emit = defineEmits(['click-container', 'click-item', 'drag-start', 'drag-end']);

function clickContainer(element, className) {
  emit('click-container', element, className);


}

function clickItem(item) {
  emit('click-item', item);
}
function add(event) {
  // 添加逻辑
  emit('drag-start', event);
}

function DragEnd(event) {
  // 拖动结束逻辑
  emit('drag-end', event);
}

onMounted(()=>{

})

// 生成模板部分（递归）

</script>

<style scoped>
.ghost {
  opacity: 0.5;
}
</style>
