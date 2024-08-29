<template>
  <div class="content">
<!--    <img src="@/assets/logo.png" alt="">-->
    <h1>欢迎使用</h1>
    <Button label="使用" severity="success" raised  @click="()=>{
        router.push('/projectCreate')
    }"/>
  </div>



</template>

<script setup>

import router from "@/router/index.ts";
</script>

<style scoped>
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 1em;
}
</style>
