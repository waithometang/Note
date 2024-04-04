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

type SubInfo = { username: string; age: number; phone: number };
function subInfo(info: SubInfo) {}
let subInfo1: SubInfo = { username: "zs", age: 20, phone: 111 };
subInfo(subInfo1);
subInfo({
  username: "zs1",
  age: 10,
  phone: 222,
});
export {};
