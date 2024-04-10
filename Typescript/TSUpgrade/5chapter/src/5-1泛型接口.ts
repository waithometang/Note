/**
 * 泛型：
 *  1、定义时不明确使用时必须明确成某种具体类型的数据类型【泛型的宽泛】
 *  2、编译期间进行数据类型检查的数据类型【泛型的严谨】
 */
interface Ref<T> {
  value: T;
}

let myName: Ref<string> = {
  value: "zhangsan",
};

type Stu = { name: string; age: number };
let stu: Ref<Stu> = {
  value: {
    name: "lisi",
    age: 20,
  },
};
export {};
