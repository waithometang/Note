/**
 * 柯里化函数：将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
 * 组合函数：将两个或多个函数组合成一个新的函数，并且组合的函数从右往左执行
 */
function add(x) {
  return x + 3;
}
function mul(y) {
  return y * 2;
}
// 类似于管道函数-从左到右
function compose(...fns) {
  return function (x) {
    return fns.reduceRight((arg, fn) => {
      return fn(arg);
    }, x);
  };
}

const combineFun = compose(mul, add);
console.log(combineFun(5)); // 16
