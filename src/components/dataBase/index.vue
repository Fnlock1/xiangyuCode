<script setup lang="ts">
import {ref} from "vue";
import {AiFillCloseCircle} from "vue-icons-plus/ai";
import {TbBrandNpm} from "vue-icons-plus/tb";
import axios from "axios"
import {request} from "@/utils/request";
let show = defineModel('dataBaseShow')
let inputValue = ref('')
let tabs = ref(['apiPrefixList','apiList'])
let tab =ref('apiPrefixList')
let curTab = ref('apiPrefixList')
let data = ref([
  {
    title:"当前xiangyuCode 使用的PackJson",
    list:[]
  },
  {
    title:"当前项目使用的PackJson",
    list:[]
  }
])

let packJsonList = ref([

])

async function getData() {
  packJsonList.value = await search(inputValue.value)
}

async function getPrefix(){
  request('/api/Url','get',{
  }).then(res=>{
    console.log(res)
  })
}

function getUrl(){
  request('/api/Url','get',{
  }).then(res=>{
    console.log(res)
  })
}

function search(){
  console.log('123')
}

</script>

<template>
  <n-modal :show="show">
    <div class="p4 bg-white  rounded w-50% h-40vh">
      <header class="flex justify-end">
        <AiFillCloseCircle class="Primary cursor-pointer" @click="show=false" />
      </header>
      <main class="h100%">
        <n-tabs ref="tabsInstRef"
                placement="left"
                class="overflow-y-hidden h-100%"
                v-model:value="curTab">
            <n-tab-pane  v-for="tab in tabs" :name="tab" :tab="tab">
              <div class="h-100%">

<!--                头部-->
                <div class="flex bg-red p-4 gap-3">
                  <n-input placeholder="请输入内容" ></n-input>
                  <n-button>add</n-button>
                  <n-button>search</n-button>
                </div>

<!--              内容-->
                <main class="h70% bg-blue overflow-y-scroll" >
                  <div class="apiCard p-2 flex  items-center justify-between" v-for="(item,index) in  14">
                    <div class="">Url:43.123.56.75:80</div>
                    <n-button-group>
                      <n-button type="primary">getChildren</n-button>
                      <n-button type="warning">delete</n-button>
                    </n-button-group>
                  </div>
                </main>
              </div>
            </n-tab-pane>

        </n-tabs>
      </main>
    </div>
  </n-modal>
</template>

<style scoped>

</style>
