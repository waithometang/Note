/**
 * 原型：每个对象都有一个特殊的的内部属性[[prototype]]，他指向了该对象的原型，也就是该对象继承的对象，而原型对象也有自己得原型，因此构成了原型链
 * 原型（Prototype）就是对象的一种属性，它指向另一个对象，用于实现对象之间的继承关系。当我们访问一个对象的属性或方法时，如果该对象本身没有定义这个属性或方法，JavaScript 引擎会沿着原型链向上查找，直到找到对应的属性或方法，或者查找到顶层的原型对象为止。
 */

function Animal() {
  this.name = "animal";
  this.foot = 4;
  this.info = {
    color: "red",
  };
}
Animal.prototype.bar = function () {
  console.log("wang~~");
};
function Dog() {}
/**
 * 1、原型链继承--将子类的原型指向父类的实例（让构造函数的prototype指向另一个构造函数的实例）
 * 缺点：
 *      1、原型共享：子类的实例会共享父类的原型对象，如果修改了一个实例的属性，会影响到其他实例和子类。
 *      2、无法传递参数：由于子类的原型指向父类的实例，因此无法在创建子类实例时向父类传递参数。
 *      3、无法实现多继承：JavaScript 中的原型链继承只能实现单继承，无法同时继承多个父类的属性和方法。
 *      4、无法访问父类的私有属性：子类的实例可以访问父类的属性和方法，但无法访问父类的私有属性。
 */
Dog.prototype = new Animal();
const d = new Dog();
const d1 = new Dog();
d.info.color = "black";
/**
 * 2、盗用构造函数--子类构造函数中调用父类构造函数
 * 缺点
 *      1、无法继承父类原型链上的属性和方法
 *      2、方法的复用性差：每个子类的实例都会创建一个新的父类实例，无法实现方法的复用，导致内存浪费和性能下降
 *      3、无法实现多继承：同样地，盗用构造函数继承也只能实现单继承，无法同时继承多个父类的属性和方法
 */
function Cat(name, age) {
  Animal.call(this, name);
  this.age = age;
}
const c = new Cat("ketty", 2);
// c.bar() c.bar is not a function
/**
 * 3、组合继承--原型链和构造函数的结合体
 * 父类构造函数会被调用两次：一次是在创建子类实例时调用，一次是在将子类的原型指向一个新的父类实例时调用。这可能会造成性能上的一些损失，特别是在父类构造函数中有一些耗时的操作时。
 * 缺点
 *      1、父类构造函数会被调用两次：一次是在创建子类实例时调用，一次是在将子类的原型指向一个新的父类实例时调用。这可能会造成性能上的一些损失，特别是在父类构造函数中有一些耗时的操作时。
 *      2、子类实例会包含父类实例的所有属性：虽然子类通过原型链继承了父类的方法，但在创建子类实例时，父类的构造函数会被调用一次，导致子类实例会包含父类实例的所有属性，可能会导致一些意外的结果
 *
 *
 */
function Pig() {
  Animal.call(this);
}
Pig.prototype = new Animal();
const pig = new Pig();
/**
 * 4、原型式继承--利用现有对象作为新对象的原型来创建新的对象实例
 * 缺点
 *      1、不能传参，使用手写的object()不能传，但使用Object.create()是可以传参的。
 *      2、原对象中的引用类型的属性会被新对象共享。
 */
const obj = { name: "张三" };
const o = Object.create(
  obj /* 第二个参数是Object.defineProperty相关配置属性 */
);
/**
 * 5、寄生式继承--寄生式继承与原型式继承很接近，它的思想就是在原型式继承的基础上以某种方式增强对象，然后返回这个对象。
 */
function inHerit(o) {
  const clone = Object.create(o);
  clone.say = function () {
    console.log("say");
  };
  return clone;
}
const obj1 = { name: "李四" };
const o1 = inHerit(obj1);
/**
 * 6、寄生式组合继承--在子类的构造函数中调用父类的构造函数，并且通过 Object.create() 方法来创建一个以父类原型对象为原型的新对象，然后将这个新对象赋值给子类的原型，以实现原型链继承。
 */
function Horse() {
  Animal.call(this);
}
// 使用 Object.create() 创建一个以父类原型对象为原型的新对象，赋值给子类原型
Horse.prototype = Object.create(Animal.prototype);
// 修复子类原型的构造函数属性，确保指向正确的构造函数
Horse.prototype.constructor = Horse;
const horse = new Horse();
