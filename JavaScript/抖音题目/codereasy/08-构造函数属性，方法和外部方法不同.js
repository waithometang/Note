/**
 * 1、定义在构造函数里面的属性或方法是每个对象实例上的；定义在外面如say2是在原型上的
 * 2、Object.keys()可以访问构造函数的属性或方法，原型上的不行
 */
class Person {
  constructor(name) {
    this.name = name;
    this.say1 = function () {
      console.log(this.name);
    };
  }
  say2() {
    console.log(this.name);
  }
}
const p1 = new Person("zhangsan");
const p2 = new Person("zhangsan");
console.log(p1); // Person { name: 'zhangsan', say1: [Function (anonymous)] }
console.log(p1.__proto__.say1); // undefined
console.log(p1.__proto__.say2); // [Function: say2]

console.log(p1.say1 === p2.say1); // false 都是单独实例
console.log(p1.say2 === p2.say2); // true 共享原型上

console.log(Object.keys(p1)); // [ 'name', 'say1' ]
