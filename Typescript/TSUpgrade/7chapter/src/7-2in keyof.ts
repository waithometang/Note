type Gender = "male" | "female" | "未知";
interface Person {
  name: string;
  age: number;
  gender: Gender;
}
// in keyof相当于for in，遍历对象的key
/**
 * {
    name: string;
    age: number;
    gender: Gender;
    }
 */
type PersonType = {
  [P in keyof Person]: Person[P];
};
// 定义泛型
type GenericityType<T> = {
  [K in keyof T]: T[K];
};

let p: GenericityType<Person> = {
  name: "zs",
  age: 10,
  gender: "male",
};
export {};
