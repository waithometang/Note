// void 0 在过去用于确保全局变量 undefined 的值是真正的 undefined，因为在某些环境中，undefined 可能被重写
// 比如声明变量 let undefined = 123
function Test1(arg1, arg2) {
  return arg1 !== undefined ? arg1 : arg2;
}
function Test2(arg1, arg2) {
  return arg1 !== void 0 ? arg1 : arg2;
}
console.log(Test1());
console.log(Test2());
