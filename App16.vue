<script setup lang="ts">
import { userCounterStore } from '../stores/counter';

/**
 * 中央事件总线优缺点：
 * 1 优点：简单易用、轻量级、解耦组件、兄弟组件隔代组件都能通信
 * 2 缺点：难以追踪、没有类型约束、内存泄漏风险、全局状态污染、不适合大型项目
 */

// pinia: 全局状态管理仓库，所有组件均可以共享仓库中的数据和方法

// 总结步骤：
// 1 安装pinia： npm i pinia
// 2 在mian.ts中注册pinia
// 3 定义并创建store仓库
// 4 在组件中使用store中的数据和方法

// 创建pinia仓库实例
const counter = userCounterStore()
// 使用数据和方法
console.log(counter.count)
console.log(counter.dbCount)

</script>

<template>
  <p>这是App16组件</p>
  <!-- 读取仓库中的state -->
  <p>用户名name：{{ counter.name }}</p>
  <p>当前计数count: {{ counter.count }}</p>
  <!-- 读取getter -->
  <p>双倍计数dbCount:{{ counter.dbCount }}</p>
  <p>msg:{{ counter.msg }}</p>
  <!-- 调用action的方法 -->
  <button @click="counter.increment">+</button>
  <button @click="counter.decrement">-</button>
  <button @click="counter.reset">重置</button>
  <button @click="counter.setName('李四')">改名</button>
</template>

<style scoped lang="scss">

</style>