<script setup lang="ts">

</script>

<template>
  <section>
    <div class="wavy">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="content">
      <h2>Wavy</h2>
    </div>
  </section>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  background: #000;
}
section{
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
section .wavy{
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: #4973ff;
}
section .wavy span{
  position: absolute;
  width: 325vh;
  height: 325vh;
  top: 0;
  left: 50%;
  transform: translate(-50%,-75%);
  background: #000;
}
section .wavy span:nth-child(1){
  animation: animate 5s linear infinite;
  border-radius: 45%;
  background: rgba(20,20,20,1);
}
section .wavy span:nth-child(2){
  animation: animate 10s linear infinite;
  border-radius: 40%;
  background: rgba(20,20,20,0.5);
}
section .wavy span:nth-child(3){
  animation: animate 15s linear infinite;
  border-radius: 42.5%;
  background: rgba(20,20,20,0.5);
}
@keyframes animate {
  0%{
    transform: translate(-50%,-75%) rotate(0deg);
  }
  100%{
    transform: translate(-50%,-75%) rotate(360deg);
  }
}
section .content{
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 4em;
}
</style>
