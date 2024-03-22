/**
 * 解构原理分析 迭代器
 * 下面的解构报错，如何修复
 */
// TypeError: {(intermediate value)(intermediate value)} is not iterable 不可迭代的
// Symbol.iterator 原型链上增加属性
function* iterator() {
  yield 1;
  yield 2;
}
Object.prototype[Symbol.iterator] = iterator;
const [a, b] = { a: 1, b: 2 };
console.log(a, b); // 1 2

const iterable = iterator();
console.log(iterable.next()); // {value:1,done:false}
console.log(iterable.next()); // {value:2,done:false}
console.log(iterable.next()); // {value:undefined,done:true}
