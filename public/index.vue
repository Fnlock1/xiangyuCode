<script setup lang="ts">
import {BiChevronLeft} from "vue-icons-plus/bi";
import {RiVuejsFill} from "vue-icons-plus/ri";
import {onMounted} from "vue";
import './index.js'
onMounted(()=>{

})
</script>

<template>
  <div class="back pos-fixed">
    <BiChevronLeft/>
  </div>

  <n-modal :show="true">
    <div class="bg-white grid grid-cols-2 p-2 rounded-xl flex flex-col ">
      <p>请选择vue版本</p>
      <div class="flex items-center justify-between w-50vw h-40vh  transition-all hover:*:color-[#18a058] ">
      <span class="transition-all cursor-pointer">
          <RiVuejsFill/>2.x
      </span>

        <span  class="transition-all cursor-pointer">
          <RiVuejsFill/>3
      </span>
      </div>
    </div>
  </n-modal>

  <div class="vueCreate transition-all hover:scale-125">
    <RiVuejsFill/>
  </div>
</template>

<style scoped>

</style>
