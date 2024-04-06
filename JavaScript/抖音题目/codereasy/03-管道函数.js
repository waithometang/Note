/**
 * 管道函数-通常由一系列函数组成，每个函数的输出都作为下一个函数的输入，形成一个管道，最终产生最终的结果。
 */
function add(x) {
  return x + 5;
}
function multiply(x) {
  return x * 7;
}
function subtract(x) {
  return x - 2;
}

function pipe(...fns) {
  return function (input) {
    return fns.reduce((acc, fn) => fn(acc), input);
  };
}

const pipeLine = pipe(add, multiply, subtract);
console.log(pipeLine(2));
