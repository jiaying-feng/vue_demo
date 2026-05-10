<script setup lang="ts">
//接收从父组件传来的cContent
//方法一：
const props=defineProps({
    cContent:String
})
//方法二：
//const props=defineProps(["cContent"])
//失败情况
const hdInput1=()=>{
    console.log(props.cContent);//打印的没有东西
    //没有触发emit
    
}
//成功情况
//声明emit事件
//方法一：
const emit=defineEmits<{
    (event:"update:cContent",value:string):void

}>()
//event表示Input事件对象
const hdInput2=(event:Event)=>{
    //获取输入框的最新值
    //event.target 表示获取当前input事件的Dom元素
    //let myContent=event.target
    //console.log(myContent);//打印input标签
    //console.log(myContent.value);//报错：event.target默认不包含value属性
    let myContent=event.target as HTMLInputElement//类型断言
    console.log(myContent.value);//打印当前输入框中的数据
    emit("update:cContent",myContent.value)
    
    
}
//方法二：
//const emit=definEmits(["update:cContent"])

</script>

<template>
    <!-- :value="cContent"表示将input输入框中的数据绑定给cContent -->
  <input type="text" placeholder="请输入1..." @input="hdInput1" :value="cContent">
  <input type="text" placeholder="请输入2..." @input="hdInput2" :value="cContent">
  
</template>

<style scoped lang="scss">
  
</style>