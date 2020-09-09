// unshift：第一位添加元素
function unshiftFunc() {
  let arr = [1,2,3,4];
  let new1 = arr.unshift("aa","bb");
  console.log("---arr:",arr);// [aa,bb,1,2,3,4]
  console.log("---new1:",new1);// 输出的是长度 5
}
// push：末尾添加元素
function pushFunc() {
  let arr = [1,2,3,4];
  let new1 = arr.push("aa");// 第二种添加方式（末尾添加元素）
  console.log("---arr:",arr);// [1,2,3,4,aa]
  console.log("---new1:",new1);// 输出的是长度 5
}
// shift：第一位删除元素
function shiftFunc() {
  let arr = [1,2,3,4];
  let new1 = arr.shift();// 删除第一位元素
  console.log("---删除第一位元素arr:",arr);// [2,3,4]
  console.log("---new1:",new1);// 输出的是删除的元素 1
}
// pop：末尾删除元素
function popFunc() {
  let arr = [1,2,3,4];
  let new1 = arr.pop();// 删除末尾元素
  console.log("---删除末尾元素arr:",arr);// [1,2,3]
  console.log("---new1:",new1);// 输出的是删除的元素 4
}
// concat：连接两个数组
function concatFunc() {
  let arr1 = [1,2,3,4];
  let arr2 = [5,6];
  let arr3 = arr1.concat(arr2);
  console.log("---arr1:",arr1);// [1,2,3,4]
  console.log("---arr3:",arr3);// [1,2,3,4,5,6]
}
// reserve：将数组反序
function reserveFunc() {
  let arr1 = [1,2,3,4];
  let b = arr1.reverse();
  console.log("---arr1:",arr1);// [4, 3, 2, 1]
  console.log("---b:",b);// [4, 3, 2, 1]
}