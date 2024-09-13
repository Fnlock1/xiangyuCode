<script setup lang="ts">
import {ref} from "vue";
import {BsPinAngleFill, BsTrophyFill} from "vue-icons-plus/bs";
import {Io5BriefcaseSharp} from "vue-icons-plus/io5";
import {AiFillDelete} from "vue-icons-plus/ai";
import { BsFillCursorFill } from 'vue-icons-plus/bs'
import router from "@/router";

let drawDire = ref('right');
let drawModel = ref(false)
function checkConfig(){
  drawModel.value = !drawModel.value;
}
let statusArray = ref([
  {
    name:"未开始",
    type:"error",
    icon:BsPinAngleFill,
    list:[
      {
        title:"标题",
        content:"当前装"
      }
    ]
  },
  {
    name:"进行中",
    type:"success",
    icon:BsTrophyFill,
    list:[]
  },
  {
    name:"已完成",
    type:"warning",
    icon:Io5BriefcaseSharp,
    list:[]
  },
  {
    name:"已废弃",
    type:"error",
    icon:AiFillDelete,
    list:[]
  }
])


function joinProjectConfig(){
  router.push('/projectConfig')
}
</script>

<template>
  <div class="grid cols-1 w100%">
    <div class="p-6 border-b-1 border-b-solid border-b-[#efeff5]">
      <h1>信息</h1>
    </div>
    <div class="grid cols-4">
      <div v-for="(item,index) in statusArray" class="mt-5 flex flex-col gap-4 p-2">
        <!--      列表状态-->
        <n-tag :type="item.type"  class=" flex items-center w-fit p-2 rounded-xl">
          <template #avatar>
            <component :is="item.icon"  class="w-4"></component>
          </template>
          {{item.name}}
        </n-tag>


        <n-card :title="item.title"  v-for="(item,index) in item.list" :key="index">
          <template #cover>
            <img class="h-32 object-cover" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
          </template>
          卡片内容
          <template #footer>
            <div class="flex items-center justify-end">
              <n-button type="success" round @click="checkConfig">查看配置</n-button>
            </div>
          </template>
        </n-card>

        <n-empty v-if="item.list.length===0" class="mt-12" description="你什么也找不到">
          <template #extra>
            <n-button size="small">
              看看别的
            </n-button>
          </template>
        </n-empty>


        <n-drawer width="40vw" :placement="drawDire" :show="drawModel" >
          <n-drawer-content>
            <n-button @click="checkConfig" type="error">关闭</n-button>
            <h1 class="mt-4 mb-4">项目标题</h1>
            <span class="flex items-center gap3">
              <span>状态</span>
              <span>
                <n-tag type="error"  class=" w-fit p-2 rounded-xl" >
                <template #avatar>
                  <BsPinAngleFill class="w-4"></BsPinAngleFill>
                </template>
                未开始</n-tag></span>
            </span>


            <h1 class="mt-12">备忘录</h1>
            <n-input placeholder="请输入备忘录" round
                     type="textarea"
            ></n-input>
            <n-button round size="small" class="mt-4" type="success">确定</n-button>
            <div class="mt-3">
              <span class="flex items-center gap-3">
                <n-avatar
                    :size="48"
                    round
                    src="https://img1.baidu.com/it/u=1048309986,3773582286&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1726074000&t=a92a0bdb3b5f66e7e003c9128ef1a7a7"
                ></n-avatar>
                <span>xiangyuPress</span>
              </span>
              <span class="ml-5 bg-[#e7f5ee] p-4 rounded-xl">
                他妈的,项目又延期了
              </span>

              <n-divider />

            </div>

            <!-- 进入 -->
            <div class="join " @click="joinProjectConfig">
              <BsFillCursorFill class=" w-8"/>
              <div class="pingfang text-3">进入项目</div>
            </div>
          </n-drawer-content>
        </n-drawer>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
