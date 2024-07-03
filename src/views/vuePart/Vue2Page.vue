<template>
  <div class="vue-2-container">
    <div>{{ obj.name }}{{ obj.age }}</div>
    <el-button @click="changeName">changeName</el-button>
    <el-button @click="changeAge">changeAge</el-button>
  </div>
</template>

<script lang="js">
export default {
  data(){
    return {
      obj: {
        name: 'name'
      }
    }
  },
  mounted() {
    console.log('vue2Page mounted')
  },
  methods: {
    changeName(){
      this.obj.name = 'zhangsan'
    },
    changeAge(){
      this.obj.age = 10
    },
  },
}
</script>

<style lang="scss" scoped>
.vue-2-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>