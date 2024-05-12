interface Todo {
  title: string;
  completed: boolean;
  description: string;
}
// 实现功能：排除某些属性，可以使用pick,这里使用in来实现
// 第一种：
// type Omit<T, K extends keyof T> = {
//   [P in keyof T as P extends K ? never : P]: T[P];
// };
// 第二种：
type Omit<T, K extends keyof T> = {
  [P in keyof T as Exclude<P, K>]: T[P];
};
// type TodoTyp = {
//     title: string;
// }
type TodoTyp = Omit<Todo, "description" | "completed">;

export {};
