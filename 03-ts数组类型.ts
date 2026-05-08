export{}
//冯佳盈 246230330 24级软件三班
console.log("冯佳盈 246230330 24级软件三班");
//ts数组类型
//数组元素的类型一致
//方法一：
let arr1:object=[1,2,3]
//方法二：
let arr2:number[]=[4,5,6]
let arr3:string[]=["4","5","6"]
//方法三：泛型T
let arr4:Array<Number>=[7,8,9]
console.log(arr1,arr2,arr3,arr4);

//数组元素类型不一致时
//方法一：
let arr5:(number|boolean)[]=[1,true,2,false]
//方法二：
let arr6:[number,number,boolean]=[3,4,true]
console.log(arr5,arr6);
