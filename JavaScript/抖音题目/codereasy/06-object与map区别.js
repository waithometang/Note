/**
 * 区别：
 *  1、创建方式
 *  2、键类型：object的键只能是字符串或者symbol类型；map的键可以是任意类型
 *  3、键顺序：object遍历对象属性时不保证按照插入顺序(object.keys访问不了symbol属性)；map会保持键值对的插入顺序(可以访问symbol)
 */
let obj = { age: 20 }; // 对象字面量
let obj1 = new Object(); // 构造函数

let map = new Map(); // 构造函数

let obj2 = {
  name: "zs",
  age: 20,
  [Symbol("foo")]: "foo",
};
// 返回一个由给定对象自身的可枚举的字符串键属性名组成的数组。
console.log(Object.keys(obj2)); // [ 'name', 'age' ]

let map1 = new Map([
  ["name", "lisi"],
  ["age", 20],
  [Symbol("bar"), "bar"],
]);
console.log(map1.keys()); // [Map Iterator] { 'name', 'age', Symbol(bar) }
