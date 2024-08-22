<template>
  <div class="container">
      <h3>容器组件</h3>
      <div v-for="(item,index) in list" class="mt-5">
          <div >
              <h5>{{item.name}}</h5>
          </div>
      </div>
  </div>
</template>

<script setup>
import {ref,onMounted} from "vue"
import Card from "../card/index.vue"
import xDate from "../date/index.vue"
import Button from "../button/index.vue"
let list = ref([
    {
        name:"容器",
        component:Card
    },
    {
        name:"test",
        component: xDate
    }
])

// 渲染列表
let renderViewList = defineModel('renderViewList')
onMounted(()=>{
})

</script>

<style scoped>

</style>
