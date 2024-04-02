/**
 * 枚举：默认从0开始，下一个的开始永远是上一个数字加1
 */
// 数字索引
enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}
// 属性调用后者下标
console.log(Direction.UP); // 0
console.log(Direction["UP"]); // 0
console.log(Direction[0]); // UP
// 字符串索引
enum Week {
  Wen = "Wen",
  Tue = "Tue",
}
console.log(Week.Wen);
console.log(Week["Wen"]);
// console.log(Week[0]); 元素隐式具有 "any" 类型，因为类型为 "0" 的表达式不能用于索引类型 "typeof Week"。类型“typeof Week”上不存在属性“0”

enum EnumAuditStatus {
  SUCCESS,
  FAILED,
}
type Info = { id: number; status: EnumAuditStatus };
class Student {
  isPass(statu: EnumAuditStatus): void {
    if (statu === EnumAuditStatus.SUCCESS) {
      console.log("成功");
      let info: Info = { id: 1, status: statu };
    } else if (statu === EnumAuditStatus.FAILED) {
      console.log("失败");
    }
  }
}
const s = new Student();
s.isPass(EnumAuditStatus.SUCCESS);

export {};
