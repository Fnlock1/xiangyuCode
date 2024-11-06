<script setup lang="ts">
import {request} from "@/utils/request";
import {api} from "@/api";
import {onMounted, ref} from "vue";
import router from "@/router";
let page = ref(1)
let pageSize = ref(15)
let links = ref()
let data = ref()
let current_page = ref()


function changePage(link){
  request(link,'get').then(res=>{
    data.value = res.data.data
    links.value = res.data.links
    current_page.value = res.data.current_page
  })
}

function clickEdit(id){
  router.push({
    path:"/projectCreate/"+id,
    query:id
  })
}

onMounted(()=>{
  request(api.projectPaginate,'get',{
    page:page.value,
    size:pageSize.value
  }).then(res=>{
    data.value = res.data.data
    links.value = res.data.links
    current_page.value = res.data.current_page
  })
})
</script>

<template>

  <n-table :bordered="false" :single-line="false">
    <thead>
    <tr>
      <th>id</th>
      <th>title</th>
      <th>status</th>
      <th>cover</th>
      <th>action</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item,index) in data">
      <td>{{item.id}}</td>
      <td>{{item.title}}</td>
      <td>{{item.status}}</td>
      <td>
        <img class="w-12 h-12 object-cover" :src="'https://picsum.photos/'+item.img" alt="">
      </td>
      <td class="flex gap-3">
        <n-button @click="clickEdit(item.id)" type="success">edit</n-button>
        <n-button type="error">del</n-button>
      </td>
    </tr>
    </tbody>
  </n-table>

  <div class="flex gap-2 justify-end mt-5 mb-12">
    <div v-for="(item,index) in links">
      <n-button @click="changePage(item.url)"
                type="success"
                v-html="item.label"></n-button>
    </div>
  </div>

</template>

<style scoped>

</style>
