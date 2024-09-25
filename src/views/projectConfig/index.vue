<template>
  <div class="border border-b-solid border-[#f6f5fa] p-2 flex items-center justify-between pl-4">
    <div class="siyuan text-xl">xiangyuPress/src/main</div>
    <div class="flex justify-end">
      <div class="grid grid-cols-3 gap-3 transition-all cursor-pointer">
        <CgMoreVerticalAlt class="icon-style hover:Primary"/>
        <BsGrid1X2Fill class="icon-style w-4 hover:Primary"/>
        <AiOutlineUnorderedList class="icon-style w-5 hover:Primary" />
      </div>
    </div>
  </div>

  <div class="direContainer grid grid-cols-4 gap-4 p-4 ">
    <div v-for="(item,index) in direList" :key="index"
         class="border overflow-hidden rounded-2xl border-solid border-[#f6f5fa] flex flex-col justify-center items-center"
    >
      <div class="w100% h-32 bg-[#f8f8f8] flex justify-center items-center">
        <component :is="item.icon" class="w24 h24 "
                   :class="{
                 'color-[#b9bdc6]' : item.type === 'dire',
                 'color-[#548af7]' : item.type === 'typeScript',
                 'color-[#57965c]' : item.type === 'html',
                 'color-[#f2c55c]' : item.type === 'javascript',
            }" 
        ></component>
      </div>
      <span class="pt4 pb4 text-xl font-light"
      >{{item.name}}</span>

    </div>

  </div>
</template>


<script setup>
import {LiaNpm} from "vue-icons-plus/lia";
import {CgMoreVerticalAlt} from "vue-icons-plus/cg";
import {AiOutlineUnorderedList} from "vue-icons-plus/ai";
import {BsGrid1X2Fill} from "vue-icons-plus/bs";
import {onMounted, ref} from "vue";
import {getDireIcon} from "@/utils/index.ts";

let data = [
  {
    name:"public",
    type:'dire',
    id:1,
  },
  {
    name:"src",
    type: "dire",
    id:2
  },
  {
    name:"components.d.ts",
    type:"typeScript",
    id:3
  },
  {
    name:"index.html",
    type:"html",
    id:4
  },
  {
    name:"main.js",
    type:"javascript",
    id:4
  }
]

// 模拟前端返回的数据
let direList =ref([])
onMounted(()=>{
  direList.value = data.map(item=>{
    return{
      icon:getDireIcon(item.type),
      ...item,
    }
  })
})
</script>
<style scoped></style>
