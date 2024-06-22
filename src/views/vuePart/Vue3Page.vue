<template>
  <div class="vue-3-container">
    {{strRef}}
  </div>
</template>

<script setup lang="ts">
const strRef = ref('vue 3')
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