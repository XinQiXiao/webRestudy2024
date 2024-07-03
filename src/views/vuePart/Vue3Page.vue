<template>
  <div class="vue-3-container">
    {{pageData.name}}{{ pageData.age }}
    <el-button @click="changeName">changeName</el-button>
    <el-button @click="changeAge">changeAge</el-button>
  </div>
</template>

<script setup lang="ts">
const pageData = reactive({
  name: 'name'
})
function changeName(){
  pageData.name = 'zhangsan'
}
function changeAge(){
  pageData.age = 10
}
</script>

<style lang="scss" scoped>
.vue-3-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>