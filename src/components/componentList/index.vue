<template>
  <div class="container p4">
    <h3>组件😁</h3>
    <div class="xContainer">
      <div @click="createNewItem(item)" v-for="(item,index) in contentList" class="xItem">
        <h5>{{ item.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue"
import {createComponents} from "@/utils/index.ts";
import {v4 as uuidv4} from 'uuid';

// 渲染列表
let renderViewList = defineModel('renderViewList')
// 组件列表
let contentList = defineModel('componentsList')

function createNewItem(item) {
  item = {
    styleOptions: {
      background: "none"
    },
    class: [],
    id: uuidv4(),
    children: [
      {
        styleOptions: {
          background: "none",
        },
        id: uuidv4(),
        name: item.name,
      }
    ]
  }
      createComponents(item, renderViewList.value)
}

onMounted(() => {

})

</script>

<style scoped>
.xContainer {
  padding: 1em;
  display: grid;
  gap: 1em;
  grid-template-columns:repeat(4, 1fr);
}

.xItem {
  background: #2c3e50;
  color: white;
  padding: 1em;
  border-radius: 15px;
  transition: .2s ease-in-out;
  cursor: pointer;
  user-select: none;
}

.xItem:hover {
  background: #3c4f63;
  transform: scale(1.05);
}
</style>
