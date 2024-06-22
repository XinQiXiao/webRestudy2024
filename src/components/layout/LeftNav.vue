<template>
  <div class="left-nav-container">
    <el-menu
      :default-active="activeIndexRef"
      v-if="partInfo && Array.isArray(partInfo.children) && partInfo.children.length"
      class="el-menu-custom-class"
    >
      <el-menu-item 
        v-for="(item, index) in partInfo.children" :key="index" 
        @click="childMenuClick(item)"
      >
        <el-icon><Document /></el-icon>
        <span 
          :class="item.index === activeIndexRef ? 'menu-item-active-text' : 'menu-item-text'"
        >{{item.label}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
} from '@element-plus/icons-vue'

import { useRouter } from "vue-router"
import { useMainLayoutStore } from '@/stores/mainLayoutStore'

const { partInfo } = useMainLayoutStore()
const routerApi = useRouter()
const routeApi = useRoute()

const activeIndexRef = ref('1')

function childMenuClick(itemInfo){
  routerApi.push(itemInfo.path)
  activeIndexRef.value = itemInfo.index;
  
}

</script>

<style lang="scss" scoped>
.left-nav-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.el-menu-custom-class {
  background-color: transparent;
  
}
.menu-item-text {
  color: #fff;
}
.menu-item-active-text {
  color: orange;
}
</style>