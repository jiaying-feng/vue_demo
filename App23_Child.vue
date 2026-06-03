<script setup lang="ts">
// 自定义数组元素的类型
interface UserInfItf{
  name: string,
  age: number,
  gender: string
}
// 接收从父组件传来的arr
const props = defineProps({
  arr:{
    type: Array<UserInfItf>, // 定义类型
    default: [] // 定义默认值
  }
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item, index in arr" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.gender }}</td>
        <td class="btn-layout">
          <slot name="btns" :index="index"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="css">
table, th, td{
  border: 1px solid #000;
}
table{
  border-collapse: collapse;
}
</style>