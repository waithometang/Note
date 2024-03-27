/***
 * 柯里化一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
 * 通俗讲用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数。
 */
/**
 * @description: 柯里化
 * @param {Function} fn
 * @param {array} args
 * @return {*}
 */
function currying(fn, ...args) {
  /* 
    1、判断当前函数传入的参数是否大于或等于fn需要参数的数量，如果是，直接执行fn
    2、如果传入参数数量不够，返回一个闭包，暂存传入的参数，并重新返回currying函数 
*/
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return (...args2) => currying(fn, ...args, ...args2);
  }
}
function currying1(fn) {
  return function curryied(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curryied.apply(this, args.concat(args2));
      };
    }
  };
}

function add(x, y, z) {
  return x + y + z;
}
function mul(x, y) {
  return x * y;
}
const cur = currying(mul);
console.log(cur(2, 3)); // 6
console.log(cur(2)(3)); // 6

const cur1 = currying1(add);
console.log(cur1(1, 2, 3)); // 6
console.log(cur1(1, 2)(3)); // 6
console.log(cur1(1)(2)(3)); // 6
