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

Object.prototype[Symbol.iterator] = function () {
  return Object.values(this)[Symbol.iterator]();
};
const [a, b] = { a: 1, b: 2 }; // {(intermediate value)(intermediate value)} is not iterable

function customGenerator() {
  const data = [1, 2];
  let index = 0;
  return {
    next() {
      return index < data.length
        ? {
            value: data[index++],
            done: false,
          }
        : {
            value: undefined,
            done: true,
          };
    },
  };
}

let g = customGenerator();
// { value: 1, done: false }
// { value: 2, done: false }
// { value: undefined, done: true }
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

const [a, b] = { a: 1, b: 2 };
console.log(a, b); // 1 2

const iterable = iterator();
console.log(iterable.next()); // {value:1,done:false}
console.log(iterable.next()); // {value:2,done:false}
console.log(iterable.next()); // {value:undefined,done:true}
