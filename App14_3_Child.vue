<script setup lang="ts">
const props = defineProps(["username","psw","email"])
const emit =defineEmits(["update:username","update:psw","update:email"])
</script>

<template>
    <p>这是子组件</p>
    <input
    type="text"
    placeholder="请输入用户名。。。"
    :value="username"
    @input="$emit('update:username',($event.target as HTMLInputElement).value)">
    <input
    type="password"
    placeholder="请输入密码。。。"
    :value="psw"
    @input="$emit('update:psw',($event.target as HTMLInputElement).value)">
    <input
    type="email"
    placeholder="请输入邮箱。。。"
    :value="email"
    @input="$emit('update:email',($event.target as HTMLInputElement).value)">
</template>

<style scoped lang="scss">
 
</style>
