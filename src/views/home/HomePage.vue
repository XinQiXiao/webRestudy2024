<template>
  <div class="home-container">
    <el-row 
      v-for="(rowItem, rIndex) in homeOptions" :key="'rowKey'+rIndex"
      :gutter="20"
    >
      <el-col 
        v-for="(colItem, cIndex) in rowItem" :key="'colKey'+cIndex"
        :span="12"
      >
        <el-card class="card-class" @click="cardItemClick(colItem)">
          <template #header >
            <div>{{colItem.header}}</div>
          </template>
          <div class="crad-content-view">
            <div v-for="(contentItem, idx) in colItem.children" :key="'contentKey'+idx">
              {{contentItem.label}}
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">

import { useRouter } from "vue-router"
import { homeOptions } from './config/homePageConfig'
import { useMainLayoutStore } from '@/stores/mainLayoutStore'

const routerApi = useRouter()
const routeApi = useRoute()

const { setPartInfo } = useMainLayoutStore()

function cardItemClick(itemInfo){
  setPartInfo(itemInfo)
  routerApi.push(itemInfo.routePath)
}
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  /* height: 100%; */
  /* background-color: yellow; */
  /* width: 200px;
  height: 100px; */
  
}
.card-class {
  /* background-color: red; */
  width: 45vw;
  box-sizing: border-box;
  /* padding: 0 20px; */
  cursor: pointer;
}
.crad-content-view {
  height: 200px;
  overflow: auto;
  position: relative;
}
</style>