/**
 * new 操作过程
 * 1、创建一个新对象： 创建一个空的普通 JavaScript 对象（即空对象 {}）作为即将返回的对象实例。
 * 2、将新对象的原型链接到构造函数的原型： 将新创建的对象的 [[Prototype]] 指向构造函数的 prototype 属性，建立对象和构造函数之间的原型链关系。
 * 3、将构造函数的作用域赋给新对象（绑定 this）： 将构造函数内部的 this 关键字指向新创建的对象，以便在构造函数内部引用新对象的属性和方法。
 * 4、执行构造函数的代码（初始化新对象）： 执行构造函数内部的代码，对新对象进行初始化操作，比如设置属性值、调用方法等。
 * 5、返回新对象实例： 如果构造函数没有显式地返回一个对象，则 new 操作符会隐式地返回新创建的对象实例。如果构造函数内部有显式地返回一个对象（可以是任何类型的对象），则返回该对象而不是新创建的对象实例。
 */
class Person {
  constructor() {}
}

const p = new Person();
function isObject(target) {
  return (
    target !== null &&
    (typeof target === "object" || typeof target === "function")
  );
}
function _new(fn, ...args) {
  // 创建一个空的对象
  const o = Object.create(fn.prototype);
  const result = fn.apply(o, args);
  return result === isObject(result) ? result : o;

  // const obj = new Object();
  // // 获得构造函数 【不懂，获取到的是undefined】
  // const con = Array.prototype.shift.call(arguments);
  // console.log(con);
  // // 链接到原型 （不推荐使用）
  // obj.__proto__ = con.prototype;
  // // 绑定 this，执行构造函数
  // const result = con.apply(obj, arguments);
  // // 确保 new 出来的是个对象
  // return result === isObject(result) ? result : obj;
}
function Animal(name) {
  this.name = name;
}
const n = _new(Animal, "dog");
