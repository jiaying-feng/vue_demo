<template>
    <child :arr="arr">
      <!-- btns表示插槽名称 curRowSlotProps表示作用域插槽对象 -->
      <template #btns="curRowSlotProps">
        <button @click="hdClickGetInf(curRowSlotProps.index)">编辑</button>
        <button @click="hdClickDel(curRowSlotProps.index)">删除</button>
      </template>
    </child>
  </template>
  
  <script setup lang="ts">
  // 随堂练习: 使用插槽完成以下案例:
  // 1、展示1张表(父组件提供数据,子组件展示)
  // 2、点击"编辑"按钮获取当前行内容;
  // 3、点击"删除"按钮删除当前行内容。
  import { reactive } from "vue";
  import child from "./App23_Child.vue"
  
  const arr = reactive([
    {name: "张三", age: 18, gender: "男"},
    {name: "李四", age: 19, gender: "女"},
    {name: "王五", age: 20, gender: "男"},
    {name: "金毛", age: 19, gender: "女"},
  ])
  
  const hdClickGetInf = (index: number)=>{
    // 获取当前行的内容
    console.log("当前行内容为：", arr[index].name, arr[index].age, arr[index].gender);
  }
  
  const hdClickDel = (index: number)=>{
    // 删除当前行内容(源)
    // arr.splice(删除数组的索引, 要删除的元素的数量)  修改原数组
    // arr.splice(3,4) arr = [1,2,3,4,5,6,7,8] → [1,2,3,8]
    // arr.splice(3,4) arr = [1,2,3,4,5,6,7,8] → [1,2,3,4,5,7,8]
    arr.splice(index, 1)
  }
  </script>
  
  <style scoped lang="scss">
  
  </style>