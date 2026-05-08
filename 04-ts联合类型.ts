export{}
//冯佳盈 246230330 24级软件三班
console.log("冯佳盈 246230330 24级软件三班");
//ts联合类型 |或
//let x=1//number
//x=true//boolean
//x="1"
//用联合类型规避ts的强类型语言的问题
let numAndStr:number|string=1
numAndStr="1"
//1|"2"表示类型，也表示const常量(不可变)。即numAndStr2的值只能是1或“2”
let numAndStr2:1|"2"=1
numAndStr2="2"
//报错numAndStr2="1"
console.log(numAndStr);


let obj:{a:1}|{b:"2"}//声明变量
obj={a:1}
obj={b:"2"}
obj={a:1,b:"2"}//可行
 console.log(numAndStr2)