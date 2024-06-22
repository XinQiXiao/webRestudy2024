<template>
  <div class="h5-container">
    {{strRef}}
  </div>
</template>

<script setup lang="ts">
const strRef = ref('h5')
</script>

<style lang="scss" scoped>
.h5-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>