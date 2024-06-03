/**
 * @param target 方法所属的类的原型对象ExampleClass.prototype（对于静态方法，是构造函数ExampleClass）。
 * @param propertyKey 方法的名称。
 * @param descriptor 方法的属性描述符。
 */
function logMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
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
  descriptor.value = function (...args: any[]) {
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
  name?: string = "zhangsan";
  constructor(name?: string) {
    this.name = name;
  }
  @logMethod
  sum(a: number, b: number): number {
    return a + b;
  }
}

const example = new ExampleClass();
example.sum(1, 2); // 控制台输出: Method sum was called with args: [1,2]
// // 控制台输出: Method sum returned: 3

export {};
