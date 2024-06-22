<script setup lang="ts">
import { STORAGE_KEY_MAINLAYOUT } from '@/const/storageConst'
import { useMainLayoutStore } from '@/stores/mainLayoutStore'

const { setPartInfo } = useMainLayoutStore()

onMounted(()=>{
  loadStorageFunc()
})

async function loadStorageFunc(){
  try {
    const ret = localStorage.getItem(STORAGE_KEY_MAINLAYOUT)
    // console.log('loadStorageFunc ret=>', ret)
    if(ret){
      const retObj = JSON.parse(ret)
      setPartInfo(retObj)
    }
  } catch (e) {
    console.log('loadStorageFunc e=>', e)
  }
   
}
</script>

<template>
  <div class="app-container-class">
    <RouterView />
  </div>
  
  
</template>

<style lang="scss">
.app-container-class {
  position: relative;
  width: 100%;
  height: 100vh;
}
body {
  padding: 0;
  margin: 0;
}
</style>
