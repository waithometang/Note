// 1、是否为window属性：
// 其实相当于挂载到全局属性window对象属性上
var a = 1;
// console.log(window.a);

// 2、块级作用域
function Test() {
  // 变量提升 var a;
  if (true) {
    var a = 1; // a = 1
  }
  console.log(a); // 1
}
Test();

// 3、var重复声明不会报错，let会
var a = 2;
var a = 3;
let b = 3;
// let b = 4; 无法重新声明块范围变量“b”

// 4、变量提升 var会提升到作用域顶部
console.log(c); // undefined
var c = 1;

// console.log(d); // 报错 暂时性死区，d存在，但是无法访问
// let d = 5;
