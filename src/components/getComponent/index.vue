<template>
  <div v-for="(item,index) in componentsList" >
      <component :is="item.component" v-if="item?.name === name"></component>
  </div>

</template>

<script setup>
import {reactive} from "vue";

let name = defineModel('name')


let componentsList = reactive([

])
</script>

<style scoped>

</style>
