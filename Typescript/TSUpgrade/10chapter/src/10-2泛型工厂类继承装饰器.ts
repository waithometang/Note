// 实现功能：只有在实例化的时候才打印日志

// 需要使用泛型限制
function LogInfo<T extends { new(...args: any): any }>(target: T) {
    // 继承父类  
    class Logger extends target {
        constructor(...args: any) {
            super(...args);
            console.log("Logger 日志信息打印")
        }
    }
    // 使用匿名类 class extends target
    return Logger
}

@LogInfo
class Test {
    name: string;
    constructor(name: string) {
        console.log("Test constructor")
        this.name = name
    }
}
let t = new Test("张三")
// typeof Person 获取的是类 Person 的构造函数类型。换句话说，它表示的是 Person 类本身。该类型描述了 Person 类构造函数的形状和静态成员。
// new (...args: any) => Person 是一种构造签名类型，它表示任何可以通过 new 操作符创建 Person 实例的构造函数类型。这个类型只描述了构造函数的签名，不包含类的静态成员。
export {}
