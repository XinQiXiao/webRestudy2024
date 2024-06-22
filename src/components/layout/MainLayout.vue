<template>
  <div class="main-layout-container">
    <el-container class="layout-container-wrapper">
      <el-header class="layout-header">
        <div class="header-home-view" @click="homeClick">首页</div>
        <div class="header-content-view">{{ partInfo && partInfo.header ? partInfo.header : ''}}</div>
      </el-header>
      <el-container>
        <el-aside class="layout-aside">
          <LeftNav ></LeftNav>
        </el-aside>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">

import { useRouter } from "vue-router"
import { useMainLayoutStore } from '@/stores/mainLayoutStore'
import LeftNav from './LeftNav.vue'

const { partInfo } = useMainLayoutStore()

const routerApi = useRouter()
const routeApi = useRoute()

function homeClick(){
  routerApi.push('/')
}

</script>

<style lang="scss" scoped>
.main-layout-container {
  width: 100%;
  height: 100%;

}
.layout-container-wrapper {
  width: 100%;
  height: 100%;
}
.layout-header {
  padding: 0;
  background-color: #4fb0f6;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  justify-content: flex-start;
  .header-home-view {
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #4ffff6;
    cursor: pointer;
  }
  .header-content-view {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #4fb0f6;
  }
}
.layout-aside {
  background-color: #3065A1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 200px;
}

</style>