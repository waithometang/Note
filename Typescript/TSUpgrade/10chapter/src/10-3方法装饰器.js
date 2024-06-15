var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
/**
 * @param target 方法所属的类的原型对象ExampleClass.prototype（对于静态方法，是构造函数ExampleClass）。
 * @param propertyKey 方法的名称。
 * @param descriptor 方法的属性描述符。
 */
function logMethod(target, propertyKey, descriptor) {
  console.log(target); // { sum: [Function (anonymous)] }
  console.log(propertyKey); // sum
  console.log(descriptor);
  // {
  //   value: [Function (anonymous)],
  //   writable: true,
  //   enumerable: true,
  //   configurable: true
  // }
  const originalMethod = descriptor.value;
  descriptor.value = function (...args) {
    // Method sum was called with args: [1,2]
    console.log(
      `Method ${propertyKey} was called with args: ${JSON.stringify(args)}`
    );
    const result = originalMethod.apply(this, args);
    // Method sum returned: 3
    console.log(`Method ${propertyKey} returned: ${result}`);
    return result;
  };
  return descriptor;
}
class ExampleClass {
  constructor(name) {
    this.name = "zhangsan";
    this.name = name;
  }
  sum(a, b) {
    return a + b;
  }
}
__decorate(
  [
    logMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number),
  ],
  ExampleClass.prototype,
  "sum",
  null
);
const example = new ExampleClass();
example.sum(1, 2); // 控制台输出: Method sum was called with args: [1,2]
export {};
