<template>
  <div class="throttle-container">
    <el-button @click="throttleClick">点击</el-button>
    <div>实际点击：{{pageData.clickNum}}</div>
    <div>有效点击：{{pageData.num}}</div>
  </div>
</template>

<script setup lang="ts">

const pageData = reactive({
  clickNum: 0,
  num: 0,
  timeObj: null,
  lastTime: null,
})

function throttleClick(){
  pageData.clickNum++
  // const nowTime = Date.now(new Date())
  
  if(pageData.lastTime ){
    clearTimeout(pageData.timeObj)
    pageData.timeObj = null
  }
  if(!pageData.timeObj){
    pageData.timeObj = setTimeout(()=>{
      pageData.num++
      
      pageData.lastTime = Date.now(new Date())
    }, 500)
  }
  
}

</script>

<style lang="scss" scoped>
.throttle-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
}

</style>