/**
 * 类 就是拥有相同属性和方法的一系列对象的集合
 */
class People {
  name?: string; // 可选属性
  readonly age: number; // 只读属性
  static grade: number; // 静态属性
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  say() {}
  eat() {}
}
let p1 = new People("zs", 12);
let p2 = new People("ls", 20);
// 静态方法 挂载到类对象上，只能通过类访问
class DateUtil {
  static formatDate() {}
  static diffDate() {}
}
// 单例模式 创建出来的实例对象都是一样的
class DateUtil1 {
  static dateUtil1 = new DateUtil1();
  private constructor() {
    console.log("创建构造函数...立即执行，即使外部没有调用");
  }
  formatDate() {}
  diffDate() {}
}
const dateUtil1 = DateUtil1.dateUtil1;
const dateUtil2 = DateUtil1.dateUtil1;
console.log(dateUtil1 === dateUtil2); // true
// 只有调用才执行
class DateUtil2 {
  static instance: DateUtil2;
  static getInstance() {
    if (!this.instance) {
      this.instance = new DateUtil2();
    }
    return this.instance;
  }
  private constructor() {
    console.log("创建构造函数...");
  }
  formatDate() {}
  diffDate() {}
}

const dateUtil3 = DateUtil2.getInstance();
const dateUtil4 = DateUtil2.getInstance();
console.log(dateUtil3 === dateUtil4); // true

class Animal {
  _age!: number;
  get age(): number {
    return this._age;
  }
  set age(value) {
    console.log("set", value);
    if (value > 10 && value < 30) {
      this._age = value;
    } else {
      throw new Error("不在范围内");
    }
  }
}
const a = new Animal();
a.age = 20;
// a.age = 100; // Error: 不在范围内
console.log(a.age);

export {};
