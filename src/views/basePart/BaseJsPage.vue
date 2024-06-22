<template>
  <div class="base-js-container">
    <div 
      v-for="(bItem, bIndex) in baseJsOptions" :key="'bKey'+bIndex"
      class="bButton-class"
    >
      <el-card class="card-class" >
        <template #header >
          <div>{{bItem.label}}</div>
        </template>
        <div class="crad-content-view">
          <component
            :is="bItem.component"
          ></component>
          
        </div>
        
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">

import {
  baseJsOptions,
} from './config/baseWebConfig'

</script>

<style lang="scss" scoped>
.base-js-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .bButton-class {
    margin: 0 10px 10px 0;
    display: flex;
    flex-direction: column;
  }
}
.card-class {
  width: 300px;
  box-sizing: border-box;
}
.crad-content-view {
  height: 150px;
  overflow: auto;
  position: relative;
}

</style>./config/baseWebConfig