class People {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eat(who: string, where: string) {
    console.log(`who:${who},where:${where}`);
  }
}
// 静态方法返回一个对象，该对象描述给定对象上特定属性（即直接存在于对象上而不在对象的原型链中的属性）的配置。返回的对象是可变的，但对其进行更改不会影响原始属性的配置。
const propDesc = Object.getOwnPropertyDescriptor(People.prototype, "eat");
/**
 * {
  value: [Function: eat],
  writable: true,
  enumerable: false,
  configurable: true
}
 */
const targetFun = propDesc!.value;
propDesc!.value = function (...args: any[]) {
  console.log("前置拦截器...", this);
  // this
  //   {
  //   value: [Function (anonymous)],
  //   writable: true,
  //   enumerable: false,
  //   configurable: true
  //    }
  targetFun.apply(this, args);
  console.log("后置拦截器...");
};
// propDesc!.value("张三", "北京"); 可以直接拦截

// 定义原型上的拦截 让实例出来的对象调用方法时拦截
Object.defineProperty(People.prototype, "eat", propDesc!);
const p = new People("李四", 20);
p.eat("王五", "上海"); // 相当于调用propDesc!.value("王五", "上海")
export {};
