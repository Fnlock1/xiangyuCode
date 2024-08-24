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
let list = ref([

])

// 渲染列表
let renderViewList = defineModel('renderViewList')
onMounted(()=>{
    const components = import.meta.glob('/src/codeComponent/**/*.{js,vue}');

// 处理文件
    for (const path in components) {
        console.log(path)
        components[path]().then((module) => {
            console.log('Loaded file:', path, module.default);
        });
    }
})

</script>

<style scoped>
.container{
    padding: 1em;
}
</style>
