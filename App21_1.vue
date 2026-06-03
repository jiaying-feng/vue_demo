<script setup lang="ts">
//作用域插槽：允许子组件将子组件标签内部数据传递给父组件的插槽使用
//注：作用域插槽可以拿到子组件<slot>标签上通过v-bind绑定的所有属性（除name属性外)
import Child from "./App21_1_Child.vue"
</script>

<template>
    <p>父组件</p>
    <Child>
        <!--匿名作用域插槽-->
        <template v-slot="slotProps">
            <!--v-slot="slotProps"表示定义作用域插槽对象
               slotProps作用域插槽对象，包含子组件slot标签上的所有属性（除name属性外） -->
            <p>用户名:{{slotProps.username}},年龄:{{slotProps.age}}</p>
        </template>
    </Child>
    <Child>
        <!--具名作用域插槽-->
        <!--<template v-slot:user="userInfSlotProps">-->
        <!--user表示具名插槽名称，userInfSlotProps表示具名作用域插槽对象-->
        <template #user="userInfSlotProps">
            <p>性别：{{ userInfSlotProps.gender }},身份证号：{{ userInfSlotProps.id }}</p>

        </template>
    </Child>
  
</template>

<style scoped lang="scss">
  
</style>