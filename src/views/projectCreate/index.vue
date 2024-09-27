<template>


    <header class="bg-white text-xs">
      <div class="grid grid-cols-3 p-3 place-content-center items-center">
        <div class="p-4 bg-[#f2f2f2] w-fit flex items-center gap-2 rounded-xl pt-2 pb-2">
          <img src="@/assets/code.png" class="w-4" alt="" >
          <span>xiangyuCode</span>
        </div>
        <div class="text-center">pageName</div>
<!--        导出 预览-->
        <div class="flex gap-3 justify-end items-center">

          <TbBrandNpm class="color-[#cb0000] w-8s cursor-pointer" @click="npmShow=!npmShow" />

          <div class="flex gap-3 bg-[#f2f2f2] p-4 pt-2 pb-2 rounded-xl items-end">
            <BsPhone class="headIcon" />
            <TbDeviceIpad  class="headIcon"/>
            <GrPersonalComputer class="headIcon" />
          </div>

          <n-button class="text-xs" type="success" round @click="exportJson">
            <span>export</span>
            <BiExport class="w-3" />
          </n-button>
          <n-button class="text-xs" type="success" round @click="clearDiv">
            <span>Clear Not Div</span>
            <IpPreviewOpen class="w-3" />
          </n-button>
        </div>
      </div>
    </header>

  <NpmShow v-model:npm-show="npmShow"></NpmShow>


    <Splitter  class="tabBar">
        <SplitterPanel size="25">
            <ComponentList v-model:componentsList="componentsList" v-model:renderViewList="renderViewList"></ComponentList>
        </SplitterPanel>
        <SplitterPanel size="50" >
                <Content v-model:renderViewList="renderViewList"></Content>
        </SplitterPanel>
        <SplitterPanel size="25">
            <StyleOptions  v-model:renderViewList="renderViewList"></StyleOptions>
        </SplitterPanel>
    </Splitter>


</template>

<script setup>
import ComponentList from "@/components/componentList/index.vue";
import Content from "@/components/content/index.vue";
import StyleOptions from "@/components/styleOptions/index.vue";
import NpmShow from "@/components/npmShow/index.vue"
import {onMounted, ref} from "vue";
import {getComponentsNameArray} from "@/utils/index.ts";
import {BiExport} from "vue-icons-plus/bi";
import {IpPreviewOpen} from "vue-icons-plus/ip";
import {BsPhone} from "vue-icons-plus/bs";
import {GrPersonalComputer} from "vue-icons-plus/gr";
import {TbDeviceIpad,TbBrandNpm} from "vue-icons-plus/tb";
import axios from "axios"
let  npmShow =ref(false)

let componentsList = ref([])
let renderViewList = ref([ // 渲染列表
])


onMounted(async () => {
  componentsList.value = await getComponentsNameArray()
})

function exportJson(){
  console.log(renderViewList.value)
return ;
  axios.get('/api/generateVue',{
    params:{
      components:renderViewList.value
    }
  }).then(res=>{
    console.log(res)
  })
}


function clearDiv(){
  renderViewList.value = renderViewList.value.filter(el => {
    // 检查 class 中是否包含 'clickContainer'
    const hasClickContainer = el.class.includes('clickContainer');

    // 检查 children 是否为空
    const hasChildren = el.children && el.children.length > 0;

    // 保留含有 'clickContainer' 类或 children 非空的项
    return hasClickContainer || hasChildren;
  });
}

</script>

<style scoped>
.tabBar{
    height: 100vh;
}

.tabBar > div{
    border-right: 1px solid #cccccc;
}

.tabBar>div:last-child{
    border:none
}
</style>
