// 函数声明
function getName(name: string): string {
  return `${name}!`;
}
// 函数表述式
let info = function (name: string, age: number): number {
  return age;
};
type Animal = (name: string, legs: number, color: string) => void;
let animal: Animal = function (name, legs, color) {};
// 剩余参数
function getInfo(name: string, ...rest: any): any {}
getInfo("zhangsan", 20);
export {};
