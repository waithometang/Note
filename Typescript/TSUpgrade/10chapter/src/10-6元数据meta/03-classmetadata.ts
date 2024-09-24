// 在类属性上定义元数据

import "reflect-metadata";

@Reflect.metadata("info", "地球人")
class People {
  @Reflect.metadata("describe", "广东")
  @Reflect.metadata("describe2", "上海")
  place: Array<string> = ["中国", "北京"];

  @Reflect.metadata("firstName", "第一个名字")
  @Reflect.metadata("lastName", "最后一个名字")
  getFullName(name: string, age: number): string {
    return "张三";
  }
}

// 获取元数据
console.log(Reflect.getMetadata("info", People));
console.log(Reflect.getMetadata("describe", People.prototype, "place"));
console.log(Reflect.getMetadata("firstName", People.prototype, "getFullName"));
console.log(Reflect.getMetadata("lastName", People.prototype, "getFullName"));

// 获取People.prototype上getFullName方法的全部元数据
console.log(Reflect.getMetadataKeys(People.prototype, "getFullName"));
// 输出以下数据，前三个是内置的
// [
//   "design:returntype",
//   "design:paramtypes",
//   "design:type",
//   "lastName",
//   "firstName",
// ];
Reflect.getMetadataKeys(People.prototype, "getFullName").forEach((key) => {
  console.log("key", key);
  //   "design:returntype", 获取方法的返回类型 [Function: String]
  //   "design:paramtypes", 获取方法中所有的参数类型 [ [Function: String], [Function: Number] ]
  //   "design:type", 获取当前定义元数据的类型 [Function: Function]
  //   "lastName", 最后一个名字
  //   "firstName", 第一个名字
  // ];
  console.log(
    "获取方法相关元数据",
    Reflect.getMetadata(key, People.prototype, "getFullName")
  );
});

// 获取People.prototype上describe属性的全部元数据
Reflect.getMetadataKeys(People.prototype, "place").forEach((key) => {
  // 属性只有三个
  // [
  //     design:type, [Function: Array] 注意：这个如果没有定义类型，默认是[Function: Object]
  //     describe2, 上海
  //     describe 广东
  // ]
  console.log("key", key);
  console.log(
    "获取属性相关元数据",
    Reflect.getMetadata(key, People.prototype, "place")
  );
});

// 子类继承父类
// Reflect.getMetadataKeys() 可继承得到
// Reflect.getOwnMetadataKeys() 不可继承得到

export {};
