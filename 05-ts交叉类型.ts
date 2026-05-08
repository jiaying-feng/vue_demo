export{}
//冯佳盈 246230330 24级软件三班
console.log("冯佳盈 246230330 24级软件三班");
//交叉类型 &
let obj:{name:string,age:number}&{gender:string}//声明变量
obj={
    name:"张三",
    age:18,
    gender:"男"
}
let obj2:{name:string,age:number}&{gender:string,age:20}
//若果一个属性多次出现，则必须满足所有条件
obj2={
    name:"张三",
    age:20,
    gender:"男"
}
console.log(obj);
console.log(obj2);