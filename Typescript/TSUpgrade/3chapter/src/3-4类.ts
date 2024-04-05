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
}
let p1 = new People("zs", 12);
let p2 = new People("ls", 20);
export {};
