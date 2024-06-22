<template>
  <div class="openlayers-container">
    {{strRef}}
  </div>
</template>

<script setup lang="ts">
const strRef = ref('openlayers')
</script>

<style lang="scss" scoped>
.openlayers-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>