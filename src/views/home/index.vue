<template>
  <h1>欢迎使用XiangYuCode</h1>
    <Button label="Success" severity="success" raised  @click="()=>{
        router.push('/projectCreate')
    }"/>



</template>

<script setup>

import router from "@/router/index.ts";
</script>

<style scoped>

</style>
