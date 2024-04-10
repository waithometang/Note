// function 函数名(形参:any) :形参 is 类型 {
//     return true or fasle
// }

function getLen(num: string | number): number {
  if (isNum(num)) {
    return num.toString().length;
  } else {
    return num.length;
  }
}
function isNum(num: any): num is number {
  return typeof num === "number";
}
export {};
