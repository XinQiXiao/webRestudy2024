import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { STORAGE_KEY_MAINLAYOUT } from '@/const/storageConst'

export const useMainLayoutStore = defineStore('mainLayoutStore', () => {

  const partInfo = ref(null)
  
  function setPartInfo(info:any){
    partInfo.value = info;
    const infoStr = JSON.stringify(info)
    localStorage.setItem(STORAGE_KEY_MAINLAYOUT, infoStr)
  }

  return { 
    partInfo,
    setPartInfo,
  }
})
