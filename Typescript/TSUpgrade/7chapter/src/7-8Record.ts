/**
 * Record<Keys, Type>
 * 构造一个对象类型，其属性键为 Keys，属性值为 Type。该实用程序可用于将一种类型的属性映射到另一种类型:Keys只能是string | number | symbol
 */
interface CatInfo {
  age: number;
}
type CatName = "catty" | "mitt" | "hosh";

let catInfo: Record<CatName, CatInfo> = {
  catty: { age: 20 },
  mitt: { age: 12 },
  hosh: { age: 8 },
};

type R = Record<string, string | number>;

type Record<K extends keyof any, T> = {
  [P in K]: T;
};
type Record_ = Record<string, string | number>;

let rec: Record_ = {
  name: "lisi",
  age: 20,
  [Symbol("foo")]: "foo",
};

export {};
