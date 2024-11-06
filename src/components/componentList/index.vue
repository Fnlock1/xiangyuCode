<template>
  <div class="container  p4">
    <n-tabs type="segment" class="siyuan">
      <n-tab-pane name="page">
        <componentsPage @changeProject="changeProject" v-model:projectId="projectId" v-model:renderViewList="renderViewList" v-model:pageId="pageId"></componentsPage>
      </n-tab-pane>

      <n-tab-pane name="components">
        <div class="xContainer grid grid-cols-3 gap-2 mt-8">
          <div @click="createNewItem(item)" v-for="(item,index) in contentList" class="xItem">
            <h5>{{ item.name }}</h5>
          </div>
        </div>
      </n-tab-pane>
      <n-tab-pane name="Layers" class="">
        <layersTree @update:renderViewList="uploadRenderView(renderViewList)" v-model:renderViewList="renderViewList"></layersTree>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup>
import {ref, onMounted, watch, onBeforeMount} from "vue"
import {createComponents} from "@/utils/index.ts";
import {v4 as uuidv4} from 'uuid';
import componentsPage from '@/components/compoentsPage/index.vue'
import layersTree from "@/components/layersTree/index.vue";
import {request} from "@/utils/request.js";
import {api} from "@/api/index.js";
import router from "@/router/index.ts";
// 渲染列表
let renderViewList = defineModel('renderViewList')
// 组件列表
let contentList = defineModel('componentsList')
// pageId
let pageId = ref(null);
let projectId = ref(null)



function  uploadRenderView(renderView){
  request(api.projectPageConfigAdd,'put',{
    pageId:pageId.value,
    projectId:projectId.value,
    pageContent:encodeURIComponent(JSON.stringify(renderView))
  })
}

function createNewItem(item) {
  item = {
    styleOptions: {},
    class: [],
    isComponent: false,
    id: uuidv4(),
    scriptSetup: [],
    children: [
      {
        styleOptions: {},
        id: uuidv4(),
        name: item.name,
        class: [],
        scriptSetup: [],
        isComponent: true,
        props: {},
        vFor: "1",
        render: item.components.render
      }
    ]
  }
  createComponents(item, renderViewList.value)
  console.log()
  uploadRenderView(renderViewList.value)
}


function changeProject(v){
  console.log(v)
}

onBeforeMount(() => {
  projectId.value = router.currentRoute.value.params.id
})




</script>

<style scoped>


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
