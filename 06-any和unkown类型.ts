export{}
//冯佳盈 246230330 24级软件三班
console.log("冯佳盈 246230330 24级软件三班");
//any类型:任意类型 any绕过类型检验
let a:any=1
a="1"
a=[1]
a={name:"张三"}
// console.log(a.toFixed(2))//写代码时没有报错，运行报错：toFixed不是一个函数
//any像是再用js，直到执行后才会检测出错误，不像在使用Ts

let b=3
console.log(b.toFixed(2));//toFixed是函数

//unkown:任意类型（推荐用unkown）
let c:unknown=3
c="3"
c=[3]
c={name:"李四"}
// console.log(c.toFixed(2));//unkown有在做类型检验
if(typeof c=="number"){
    console.log(c.toFixed(2));
}


