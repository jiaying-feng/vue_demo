<script setup lang="ts">
// Vue内置指令
// 1.条件渲染：v-if v-else-if v-show
// 2.数据插入：v-text v-html(不常用)
// v-text：用于将指定的数据对象的值作为文本插入元素中，简化模板中对数据的输出
// v-html:用于将指定的数据对象的值作为html代码插入元素，可以渲染html标签和属性
  import { reactive } from 'vue'
let arr = reactive([
    { name: '张三', age: 18, gender: '男' },
    { name: '李四', age: 19, gender: '女' },
    { name: '王五', age: 20, gender: '男' },
  ])
</script>

<template>
    <!--用有序列表表示-->
    <ul>
        <li>
          序号: 1, 姓名: {{ arr[0].name }}, 年龄: {{ arr[0].age }},
          性别: {{ arr[0].gender }}
        </li>
        <li>
          序号: 2, 姓名: {{ arr[1].name }}, 年龄: {{ arr[1].age }},
          性别: {{ arr[1].gender }}
        </li>
        <li>
          序号: 3, 姓名: {{ arr[2].name }}, 年龄: {{ arr[2].age }},
          性别: {{ arr[2].gender }}
        </li>
      </ul>
      <hr>
    <!--
v-for="临时变量item, 索引index in 数组名" :key="index"
:key="index"可以高效的更新DOM元素。若有key，vue将可以优先使用key找到对应的旧节点，并只更新变化的部分
key属性是DOM元素的唯一标识。
  1 提高虚拟DOM的更新
     例如: [1, 2, 3] → [1, 4, 2, 3] 若没有key操作DOM3次，有key操作1次
  2 若不设置key，则可能出现一些渲染错误和性能问题
-->
<ul>
        <li
          v-for="item, index in arr"
          :key="index"
        >
          序号: {{ index + 1 }}, 姓名: {{ item.name }}, 年龄: {{ item.age }},
          性别: {{ item.gender }}
        </li>
      </ul>
<hr>

<!-- v-for="值value, 键key in 对象" -->
<ul style="list-style-type: none;">
  <li v-for="value, key in arr[0]">键名: {{ key }}: 值: {{ value }}</li>
</ul>
<hr>
      
<!--v-for应用-->
<table>
        <thead>
          <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item, index in arr" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.gender }}</td>
          </tr>
        </tbody>
      </table>
</template>

<style scoped lang="scss">
  
</style>


  
  <style scoped lang="css">
  table,
  th,
  td {
    border: 1px solid #000;
  }
  table {
    border-collapse: collapse;
  }
  th {
    width: 100px;
  }
  </style>