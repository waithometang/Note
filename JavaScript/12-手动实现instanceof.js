/**
 * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
 */
/**
 * @description: 判断Object的prototype是否在a的原型链上 a instanceof object
 * @param {Object} target 实例对象
 * @param {Function} origin 构造函数
 * @return {Boolean}
 */
function myInstanceof(target, origin) {
  const proto = target.__proto__;
  if (proto) {
    if (proto === origin.prototype) {
      return true;
    } else {
      myInstanceof(proto, origin);
    }
  } else {
    return false;
  }
}
class Person {
  constructor(name) {
    this.name = name;
  }
}
const obj = Object.create(null);
const obj2 = {};
const p = new Person("张三");
console.log(myInstanceof(p, Person)); // true
console.log(myInstanceof(obj, Object)); // false
console.log(myInstanceof(obj2, Object)); // true
