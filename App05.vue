<!--24软件三班冯佳盈246230330-->
<script setup lang="ts">
import {onMounted, ref,onUpdated, nextTick} from 'vue';
//ref获取和操作DOM元素
let op=ref()//表示获取绑定了ref属性值为op的标签
console.log(op);//p标签的实例
console.log("setup:",op.value);//想获取op对应的DOM节点，没挂载获取不了DOM节点 打印：undefined

onMounted(()=>{
    //挂在后调用，可以访问视图中的DOM元素了
    console.log("onMounted:",op.value)//可以获取
    op.value.style.color="red"
})

onUpdated(()=>{
    //onMounted里执行op.value.style.color="red"直接修改了DOM元素的样式
    //触发onUpdated需要响应式数据发生变化并导致DOM更新才会执行
    console.log("onUpdate:",op.value);//无打印
    

})

nextTick(()=>{
    //nextTick和onUpdated有点像，是在DOM更新完后执行，无论是更行初始化渲染还是后续数据变化引起都要执行nextTick
    //onUpdated每次更新都会执行，nextTick只执行一次
    console.log("nextTick:",op.value);
    
})

</script>

<template>
    <!--ref除了构造响应式数据之外，还可以作为vue提供的特殊属性，用于获取DOM元素-->
    
  <p ref="op">这是p标签</p>
</template>

<style scoped lang="scss">

</style>