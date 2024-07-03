<template>
  <div class="common-container">
    <el-button @click="deepCloneClick">深拷贝</el-button>
  </div>
</template>

<script setup lang="ts">

const pageData = reactive({

})

function deepCloneClick(obj) {
  if (typeof obj !== 'object' || obj == null) {
    // obj是null, 或  者不是对象和数组
    return obj
  }

  // 初始化返回结果
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (const key in obj) {
    // 保证 key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用！！！
      result[key] = deepCloneClick(obj[key])
    }
  }

  return result
}

setTimeout(()=>{
  console.log('111')
}, 1)
setTimeout(()=>{
  console.log('444')
}, 4)
setTimeout(()=>{
  console.log('000')
}, 0)
console.log('out')
setTimeout(()=>{
  console.log('222')
}, 2)
setTimeout(()=>{
  console.log('333')
}, 3)
console.log('out1')

</script>

<style lang="scss" scoped>
.common-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

}
</style>