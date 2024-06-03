// 不带参数类装饰器

function ProductDecorator(targetClass: any) {
  // targetClass实际上就是类
  const target = new targetClass();
  target.buy(); // 购买iphone
}
@ProductDecorator
class Product {
  name: string = "iphone";
  constructor(name: string) {
    this.name = name;
  }
  buy() {
    console.log("购买" + this.name);
  }

  price() {
    console.log(this.name + "价格是：9000");
  }
}
// 带参数类装饰器
function ProductDecorator1(arg: string) {
    console.log(arg);
    return function (targetClass: any) {
        // targetClass实际上就是类
        const target = new targetClass("iphone");
        target.buy(); // 购买iphone
    }
}
@ProductDecorator1("小明")
class Product1 {
    name: string = "iphone";
    constructor(name: string) {
        this.name = name;
    }
    buy() {
        console.log("购买" + this.name);
    }

    price() {
        console.log(this.name + "价格是：9000");
    }
}
export {}
