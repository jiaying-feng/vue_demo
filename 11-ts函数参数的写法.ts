export{}
console.log("246230330冯佳盈24软件三班")
//默认参数只能存在形参最后
function fn1(a:number,b:number=2){
    return a+b
}
console.log(fn1(1,2));//3
console.log(fn1(1));//2

//缺省参数?
function fn2(a:number,b?:number){
    return a
}
//剩余参数（函数参数的解构）...
function fn3(a:number,b:number,...arr:number[]){
    console.log(a,b);
    console.log(arr);
    
    
}

fn3(1,2,3,4,5,6)


