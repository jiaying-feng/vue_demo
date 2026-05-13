<!-- App14_2_Child.vue -->
<script setup lang="ts">
// 定义三个独立的 prop，对应不同的 v-model
defineProps<{
  username: string;
  psw: string;
  email: string;
}>();

// 定义三个独立的更新事件
const emit = defineEmits<{
  (e: 'update:username', value: string): void;
  (e: 'update:psw', value: string): void;
  (e: 'update:email', value: string): void;
}>();
</script>

<template>
  <div>
    <p>这是子组件</p>
    <input 
      type="text" 
      placeholder="请输入用户名。。。" 
      :value="username"
      @input="emit('update:username', ($event.target as HTMLInputElement).value)"
    />
    <input 
      type="password" 
      placeholder="请输入密码。。。" 
      :value="psw"
      @input="emit('update:psw', ($event.target as HTMLInputElement).value)"
    />
    <input 
      type="email" 
      placeholder="请输入邮箱。。。" 
      :value="email"
      @input="emit('update:email', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped lang="scss">
</style>