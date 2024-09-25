<template>
    <RouterView :key="router.currentRoute"></RouterView>
</template>


<script setup>
import router from "@/router/index.ts";
</script>


<style>
.clickContainer{
  border: 1px solid #1e7e34;
}
</style>
