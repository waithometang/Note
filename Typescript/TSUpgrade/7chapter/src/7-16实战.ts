/**
 * 功能实现：给定一个数组，并且传入指定的属性，返回包含该属性的新数组
 */

// 学生类
interface Stu {
  stuNo: number;
  stuName: string;
  stuClass: number;
  teaherNo: number;
  teacherName: string;
}
// 单个参数
function GetSubItem<T, K extends keyof T>(
  array: T[],
  key: K
): Array<{ [P in K]: T[K] }> {
  return array.map((item) => ({ [key]: item[key] } as { [P in K]: T[K] }));
}

const arrStu: Stu[] = [
  {
    stuNo: 100,
    stuName: "王五",
    stuClass: 1,
    teaherNo: 2,
    teacherName: "张三",
  },
  {
    stuNo: 60,
    stuName: "李四",
    stuClass: 4,
    teaherNo: 3,
    teacherName: "李华",
  },
  {
    stuNo: 90,
    stuName: "赵六",
    stuClass: 4,
    teaherNo: 6,
    teacherName: "刘七",
  },
];
// 多个参数
function pluck<T, K extends keyof T>(
  array: T[],
  ...keys: K[]
): Array<{ [P in K]: T[K] }> {
  return array.map((item) => {
    const newItem: { [P in K]: T[K] } = {} as { [P in K]: T[K] };
    keys.forEach((key) => {
      newItem[key] = item[key];
    });
    return newItem;
  });
}
pluck(arrStu, "stuClass", "stuName").map((item) => item.stuName);
// GetSubItem(arrStu, "stuClass").forEach((item) => item.stuClass);
export {};
