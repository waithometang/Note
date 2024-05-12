/**
 * Record,Capitalize,Exclude,映射类型
 */

interface Todo {
  title: string;
  completed: boolean;
  description: string;
  add(): number;
  del(): number;
  update(): number;
}
// 获取接口的函数方法属性，并添加额外的描述
// 1、获取函数属性
// type Degree<T> = {
//   [P in keyof T as T[P] extends Function ? P : never]: T[P];
// };
// type DegreeTodo = {
//   add: () => number;
//   del: () => number;
//   update: () => number;
// }
// type DegreeTodo = Degree<Todo>;

// Capitalize 将首字母大写
// type Cap = "hello";
// type CapTyp = Capitalize<Cap>; // type CapTyp = "Hello"

// 2、将获取到的属性加额外的操作，模板字符串
type Degree<T> = {
  [P in keyof T as T[P] extends Function
    ? `do${Capitalize<P & string>}`
    : never]: T[P];
};
// type DegreeTodo = {
//   doAdd: () => number;
//   doDel: () => number;
//   doUpdate: () => number;
// }
type DegreeTodo = Degree<Todo>;

export {};
