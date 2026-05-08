export{}
//常用接口定义数组的方式（继承array）
interface ArrNumAndStr extends Array<number|string>{}
let arr1:ArrNumAndStr=[1,"2",3,"4"]
//把arr1数组中的所有元素一个一个拿出来，命名为ele,然后在函数里对每一个ele进行操作
//value表示数组中的元素，idx表示下标，array表示该数组本身
arr1.forEach((value,index,array)=>{
    console.log(value,index,array);
    
})
//最常用数组方法
let arr2:(number|string)[]=[1,"zhangsan",2]
arr2.forEach(ele=>{
    console.log(ele);
    
})