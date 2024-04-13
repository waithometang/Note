class Product {
  id!: number;
  price!: number;
  static count: number;
  print() {}
  static seal() {}
}
type Pr = keyof Product; // 获取的是实例属性和方法
let keys: Pr = "id";

// 定义泛型约束 extends
type Pt<T extends object> = keyof T;
let ks: Pt<Product> = "price";

type ObjType = { username: "lisi"; age: 20 };
type ObjKeys<T extends object, K /* extends keyof T */> = K extends keyof T
  ? K
  : never;

type TestKeys = ObjKeys<ObjType, "username" | "age">;

export {};
