<template>
  <div class="debounce-container">
    <el-input v-model="pageData.inputValue" @input="submitClick"></el-input>
    <div>输入次数：{{pageData.inputNum}}</div>
  </div>
</template>

<script setup lang="ts">

const pageData = reactive({
  inputValue: '',
  timeObj: null,
  inputNum: 0,
})

function submitClick(){
  
  if(pageData.timeObj){
    clearTimeout(pageData.timeObj)
  }
  pageData.timeObj = setTimeout(()=>{
    pageData.inputNum++
    
    pageData.timeObj = null
  }, 2000)
}

</script>

<style lang="scss" scoped>
.debounce-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
}

</style>