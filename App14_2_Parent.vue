<!-- App14_2_Parent.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import Child from './App14_2_Child.vue';

// 分别定义三个响应式数据，用于双向绑定
const username = ref("");
const password = ref("");
const email = ref("");
</script>

<template>
  <div>
    <h3>这是父组件</h3>
    <p>用户名：{{ username }}</p>
    <p>密码：{{ password }}</p>
    <p>邮箱：{{ email }}</p>
    
    <!-- 使用 v-model 分别绑定不同的 prop -->
    <Child 
      v-model:username="username"
      v-model:psw="password"
      v-model:email="email"
    ></Child>
  </div>
</template>

<style scoped>
</style>