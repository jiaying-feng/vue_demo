<script setup lang="ts">
import { userCounterStore } from '../stores/counter';
const counter = userCounterStore()
</script>

<template>
  <p>这是App16_1组件</p>
  <button @click="counter.increment">+</button>
</template>

<style scoped lang="scss">

</style>