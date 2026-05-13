<script setup lang="ts">
import { ref } from 'vue';
import Child from "./App14_2_Child.vue"

// 定义子组件需要的三个数据
const username = ref("")
const password = ref("")
const email = ref("")
</script>

<template>
  <div>
    <h3>这是父组件</h3>
    <p>用户名：{{ username }}</p>
    <p>密码：{{ password }}</p>
    <p>邮箱：{{ email }}</p>
   
    <!-- 双向绑定子组件数据 -->
    <Child 
      v-model:username="username"
      v-model:psw="password"
      v-model:email="email"
    />
  </div>
</template>

<style scoped>
</style>