// 定义相同的元数据key是否会覆盖
import "reflect-metadata";

@Reflect.metadata("describe", "人类")
class People {}

@Reflect.metadata("describe", "外星人")
class Customer {}

// 不会被覆盖，因为根据不同target获取的
console.log(Reflect.getMetadata("describe", People));

export {};
