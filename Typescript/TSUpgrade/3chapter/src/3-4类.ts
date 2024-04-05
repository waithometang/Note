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

/**
    封装性：使用 get 和 set 方法可以隐藏类内部的实现细节，使得类的使用者无需关心属性的具体实现方式，只需通过统一的接口来访问属性。这有助于提高代码的封装性和可维护性。
    数据验证：通过 set 方法可以对属性进行验证，确保属性值符合预期的格式、范围或规则。这样可以有效地防止不合法的数据进入对象。
    计算属性：通过 get 方法可以实现计算属性，即根据其他属性的值动态计算出一个属性的值。这样可以简化代码，提高可读性。
    属性访问控制：通过 get 和 set 方法，可以对属性的读写进行控制，例如只允许读取而不允许修改，或者只允许特定的对象对属性进行赋值，从而增加了对属性的访问控制
 */
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
