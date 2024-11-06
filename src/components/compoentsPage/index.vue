<script setup>
import {onMounted, ref, watch} from "vue";
import {keyContainer} from "@/utils/keyDown";
import {request} from "@/utils/request";
import {api} from "@/api"
import router from "@/router";
import {BsFileText} from "vue-icons-plus/bs";
import {CiTrash} from "vue-icons-plus/ci"
let addPageShow = ref(false)
let pageList = ref([])
let pageName = ref('')
let projectId = defineModel('projectId')
let pageIdNumber = defineModel('pageId')
let renderViewList = defineModel('renderViewList')
let emits = defineEmits(['changeProject'])
function addPageFn() {
  addPageShow.value = !addPageShow.value
}

function getPageById(id) {
  request(api.projectPageGetId, 'get', {
    'id': id
  }).then(res => {
    pageList.value = res.data
  })
}

function createPage(projectId, pageName) {
  request(api.projectPageAdd, 'post', {
    projectId: projectId,
    name: pageName
  }).then(res => {
    pageList.value.push(res.data)
    addPageFn()
  })
}


function delPage(pageId,projectId) {
  request(api.projectPageDelId, 'delete', {
    id: pageId,
  }).then(res=>{
    getPageById(projectId)
    pageIdNumber.value = undefined
  })
}

//切换tab
function checkTab(){
  // 步进
  let step = 0
}

function getPageConfig(pageId,projectId){
  pageIdNumber.value = pageId
  emits('changeProject',projectId)
  request(api.projectPageConfigGet,'get',{
    pageId,
    projectId
  }).then(res=>{
    renderViewList.value = JSON.parse(decodeURIComponent(res.data.pageContent))
  })
}



onMounted(() => {
  getPageById(projectId.value)

  // 快捷键 添加页面
  keyContainer.register(['ControlLeft', 'Backslash'], addPageFn)
  keyContainer.register(['ControlRight','Delete'],checkTab)


})

</script>

<template>
  <n-button-group class="flex justify-end">
    <n-button type="primary" @click="addPageFn" size="small" round>addPage</n-button>
  </n-button-group>

  <div
      v-for="(item,index) in pageList"
      style="cursor: pointer"
      @click.self="getPageConfig(item.id,projectId)"
      class="p-3 w-100% border-b border-1 border-b-solid border-gray-200 hover:bg-gray-100/75 transition-all rounded mt-3 flex items-center justify-between gap-3">
    <span class="flex gap-3 items-center">
      <BsFileText class="color-gray-4"/>
      <span>{{ item.name }}</span>
    </span>
    <CiTrash @click="delPage(item.id,projectId)"/>
  </div>

  <n-empty v-if="pageList.length === 0"></n-empty>


  <n-modal
      :show="addPageShow" class="position-relative">
    <div class="bg-gray-100 p4 rounded-lg w-50% h-30vh">
      <n-input round placeholder="please input PageName" v-model:value="pageName" @keydown.esc="addPageFn"
               @keydown.enter="createPage(projectId,pageName)" class="h-12"></n-input>
      <n-button-group class="position-absolute bottom-12 right-12">
        <n-button type="error" @click="addPageFn" class="" round>close</n-button>
        <n-button type="success" class="" round>add</n-button>
      </n-button-group>
    </div>
  </n-modal>
</template>

<style scoped lang="scss">

</style>