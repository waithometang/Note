class Car {
  constructor(public type: string, public price: number) {
    this.type = type;
    this.price = price;
  }
  rent() {
    console.log("car rent");
  }
}
class Bus extends Car {
  constructor(public type: string, public price: number, public name: string) {
    super(type, price);
    this.name = name;
  }
  rent() {
    console.log("bus rent");
  }
}
// class Truck extends Car {
//   constructor() {
//     super();
//   }
// }

const car: Car = new Bus("ben", 1000, "hh");
// as 类型断言
const bus: Bus = car as Bus;
// console.log(bus.price);

let n: number = 123;
let s: string = n as any;

let foo = Symbol("foo");
let user = { [foo]: "foo", name: "zs", age: 20 };
let f = user[foo];
let na = "name"; // const na = "name"
// 注意，这里定义的是字面量,不是属性，所以用as
let userName = user[na as any];
// console.log(userName);

export {};
