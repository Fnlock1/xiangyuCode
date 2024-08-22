<template>
  <div v-for="(item,index) in componentsList" >
      <component :is="item.component" v-if="item?.name === name"></component>
  </div>

</template>

<script setup>
import Button from "../button/index.vue";
import Card from "../card/index.vue"
import {reactive} from "vue";

let name = defineModel('name')


let componentsList = reactive([
    {
        name:"Button",
        component:Button
    },
    {
        name:"Card",
        component: Card
    }
])
</script>

<style scoped>

</style>
