/**
 * Pick<Type, Keys>
 * 通过从 Type 中选取属性 Keys（字符串文字或字符串文字的并集）集来构造类型。
 */
interface Todo {
  name: string;
  description: string;
  completed: boolean;
}
// {
//     name: string;
//     completed: boolean;
// }
type TodoType = Pick<Todo, "name" | "completed">;

let todo: TodoType = {
  name: "zs",
  completed: false,
};

export {};
