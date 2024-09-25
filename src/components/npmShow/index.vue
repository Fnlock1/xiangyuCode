<script setup lang="ts">
import {ref} from "vue";
import {AiFillCloseCircle} from "vue-icons-plus/ai";
import {TbBrandNpm} from "vue-icons-plus/tb";
import axios from "axios"
let show = defineModel('npmShow')
let inputValue = ref('')
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

function search(val):any{
  axios.defaults.baseURL = 'https://api.npms.io/v2'   //设置的临时默认地址
  //进行网络请求 并把内容返回
  return axios.get(`/search?q=${val}&from=0&size=15`).then(res=>{
    axios.defaults.baseURL = "http://localhost:8000/api"

    return res.data.results
  })
}

</script>

<template>
  <n-modal :show="show">
    <div class="w-50vw p-4 bg-white rounded h-60vh">
      <header class="flex justify-end">
        <AiFillCloseCircle class="Primary cursor-pointer" @click="show=false" />
      </header>
      <main>
<!--        内容区域-->
<!--        搜索框-->
        <div class="flex w-80% items-center gap-4 mxa mt-5">
          <TbBrandNpm class="color-[#cb0000] w-12 h-12 cursor-pointer" />
          <n-input v-model:value="inputValue" @change="getData()" class="h-8" placeholder="please input pack Name" size="tiny" round></n-input>
        </div>


        <div class="h-100 overflow-y-scroll">

          <div class="m-2 flex justify-between" v-for="(item,index) in packJsonList">
            <div>
              {{item.package.name}}
            </div>
            <n-button type="success" class="siyuan" round>add</n-button>
          </div>
        </div>

      </main>
    </div>
  </n-modal>
</template>

<style scoped>

</style>
