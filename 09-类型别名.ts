export{}
//类型别名type 用于自定义类型
type StrOrNum=string|number
let x:StrOrNum=1
x="1"
type ObjType={
    name:string&"张三",
    age:number
}
let obj:ObjType={
    name:"张三",
    age:19
}
console.log(obj);
//interface和type都是自定义类型的
//interface和type区别
//1类型别名支持联合类型和交叉类型的定义，Interface不支持
//2接口可以同名，类型别名不可以同名


//用类型别名保存接口上的属性
interface PersonItf{
    name:string
    age:number
}
//用类型别名保存personItf接口上名为"name"属性的类型
type NameType=PersonItf["name"]
let myname:NameType="zhangsan"

