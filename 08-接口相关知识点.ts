export{}
//接口继承，只读，缺省，同名
interface NameItf{
    //表示属性制度不能被修改randonly
    readonly name:string
}
interface AgeItf{
    //?表示缺省，age属性可以缺省
    age?:number
}
interface PersonItf extends NameItf,AgeItf{
gender:string

}
let p:PersonItf={
    name:"张三",
   // age:18,
    gender:"男"
}
p.gender="女"
//p.name="lisi"//报错：Cannot assign to 'name' because it is a read-only property.
console.log(p.name,p.gender);

interface XIft{
    x:number
}
//同名：接口可以同名，将同名的接口具有的所有的属性全部合并，否则会遗失某个属性
interface XIft{
    y:string
}
let obj:XIft={
    x:20,
    y:"21"

}
