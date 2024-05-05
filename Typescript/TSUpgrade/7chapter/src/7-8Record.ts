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
type Test = Record<string, any>;
let arr: Test = [1, 2, 3, 4, 5];
let obj: Test = { name: "zs", age: 20 };

// 对象深拷贝
let copyObj = {
  name: "lisi",
  age: 123,
  hobbies: ["ball", "play"],
  info: {
    address: "asndjasd",
    phone: 123123,
  },
};
type BaseType = string | number | boolean;
type DeepCopyObject = Record<string, any>;
function deepClone(
  obj: DeepCopyObject | BaseType,
  map = new WeakMap()
): DeepCopyObject | BaseType {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (map.has(obj)) {
    return map.get(obj);
  }
  let result: DeepCopyObject = Array.isArray(obj) ? [] : {};
  map.set(obj, result);
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = deepClone((obj as DeepCopyObject)[key], map);
    }
  }
  return result;
}

console.log(deepClone(copyObj));

export {};
