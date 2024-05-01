// 在一个已知的对象类型中添加属性，生成一个新的类型

interface Person {
  name: string;
  age: number;
  gender: "male" | "female";
}

type AddObjTyp<T, K extends string, V> = {
  // T | K联合类型，extends条件类型判断属性是否在对象上
  [P in keyof T | K]: P extends keyof T ? T[P] : V;
};

type PT = AddObjTyp<Person, "id", number>;
/**
 * {
    id: number;
    name: string;
    age: number;
    gender: "male" | "female";
}
 */
export {};
