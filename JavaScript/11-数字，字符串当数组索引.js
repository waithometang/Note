/**
 * 数组索引：
 * 1、数字会被当成字符串
 * 2、对象会调用toString方法，函数也会调用toString方法
 * 3、Symbol不需要转成字符串，本身就可以作为key
 */
let a = 0;
let arr = [];
arr[0] = 1;
arr["0"] = 2;
console.log(arr); // 2

let obj = {};
arr[obj] = 3;
console.log(arr); // [ 2, '[object Object]': 3 ]

function Test() {
  return "code";
}
arr[Test] = 4;
console.log(arr);
//  [
//     2,
//     '[object Object]': 3,
//     'function Test() {\r\n  return "code";\r\n}': 4
//   ]

let t = Symbol("t");
arr[t] = 5;
console.log(arr);
// [
//     2,
//     '[object Object]': 3,
//     'function Test() {\r\n  return "code";\r\n}': 4,
//     [Symbol(t)]: 5
// ]
