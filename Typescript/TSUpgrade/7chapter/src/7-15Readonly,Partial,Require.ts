/**
 *  1、Required-必填
 *  2、Partial-可选
 *  3、Readonly-只读
 */

type Todo = {
  readonly title: string;
  completed: boolean;
  description?: string;
  time?: Date;
};

// type Req = {
//     readonly title: string;
//     completed: boolean;
//     description: string;
//     time: Date;
// }
// 全部转为必选属性 type Required<T> = { [P in keyof T]-?: T[P]; }
type Req = Required<Todo>;

// type Par = {
//   readonly title?: string | undefined;
//   completed?: boolean | undefined;
//   description?: string | undefined;
//   time?: Date | undefined;
// }
// 全部转为可选属性 type Required<T> = { [P in keyof T]?: T[P] | undefined; }
type Par = Partial<Todo>;

// type Rea = {
//   readonly title: string;
//   readonly completed: boolean;
//   readonly description?: string | undefined;
//   readonly time?: Date | undefined;
// }
// 全部转为可选属性 type Required<T> = { readonly [P in keyof T]: T[P]; }
type Rea = Readonly<Todo>;

export {};
