/**
 * 泛型：
 *  1、定义时不明确使用时必须明确成某种具体类型的数据类型【泛型的宽泛】
 *  2、编译期间进行数据类型检查的数据类型【泛型的严谨】
 */
interface Ref<T> {
  value: T;
}

let myName: Ref<string> = {
  value: "zhangsan",
};

type Stu = { name: string; age: number };
let stu: Ref<Stu> = {
  value: {
    name: "lisi",
    age: 20,
  },
};
// 恒等函数：f(x) = x;给定输入，输出相同值
function identity(x) {
  return x;
}
function identity1(x:number):number {
  return x;
}
function identity2(x:string):string {
  return x;
}
// 使用泛型
function identity2<T>(x:T):T {
  return x;
}
type MyIdentity<T> = (arg:T) => T;

interface MyIdentity1{
  <T>(arg:T):T;
}

interface MyIdentity2<T>{
  (arg:T):T;
}
// 泛型类
class GenericNumber<T> {
  zero:T;
  add: (x:T,y:T) => T;
}
const gn = new GenericNumber<number>();

// 获取对象中已存在的属性
function ExtendType<T,K extends keyof T>(obj:T,key:K) {
  return obj[key]
}
// 泛型中使用类类型
function create<T>(c: { new(): T }): T {
  return new c()
}
class BeeKeeper {
  hasMask: boolean = true;
}
 
class ZooKeeper {
  nametag: string = "Mikle";
}
 
class Animal {
  numLegs: number = 4;
}
 
class Bee extends Animal {
  numLegs = 6;
  keeper: BeeKeeper = new BeeKeeper();
}
 
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
 
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
 
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
export {};
