var a = 1;
{
  a = 2;
  function a() {} // 当进行当这行代码时，会将之前a变量操作的复制一份给全局，后面修改的认为是私有的
  a = 3;
  console.log("块级作用域a", a); // 3
}
console.log("全局作用域a", a); // 2

var b = 1;
{
  function b() {}
  b = 2;
  console.log("块级作用域b", b); // 2
}
console.log("全局作用域b", b); // function b() {}


// 变量遮蔽 在函数内部引用c，会查找最近的作用域里的c的变量或函数，而不会查找外部作用域的，在这种情况下，函数c遮蔽了外部c的变量
var c = 2;
// 函数名称是只读的
(function c() {
  c = 3;
  console.log("块级作用域c", c); // function c() {}
})();
console.log("全局作用域c", c); // 2
