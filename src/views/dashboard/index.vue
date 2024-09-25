<script setup lang="ts">
import {dashBoard} from "./utils.js"
import {RouterView} from "vue-router";
import {ref} from "vue";
import router from "@/router";
let collapsed = ref(false);
function setRouter(e){
  let nextRouter = dashBoard.filter(x=>x.label === e);
  if(nextRouter.length > 0){
    router.push(nextRouter[0].path);
  }
}
</script>

<template>
<div class="flex">
  <div class="w-10% border-r-solid border-r-1 border-[#efeff5]">
    <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="dashBoard"
        @update-value="setRouter"
    />
  </div>
  <div class="w100%">
    <RouterView></RouterView>
  </div>

</div>
</template>

<style scoped>

</style>
