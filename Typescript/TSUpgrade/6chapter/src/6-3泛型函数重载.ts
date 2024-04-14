/**
 * 中文排序
 * 字符串排序
 * 中英文，数字数组排序
 * 中英文、数字数组、数组内部字符串排序
 * 字符串排序+中英文、数字数组+数组内部字符串自排序
 */
import { quickSort } from "./6-2泛型函数";
quickSort([])

const chineseArr = ["大连", "广州", "东莞", "深圳", "江门"];

function sortChinese(arr: Array<string>): Array<string> {
  return arr.sort((acc, cur) => {
    return acc.localeCompare(cur, "zh-Cn");
  });
}
function isChinese(arr: Array<string>): boolean {
  const chineseRegex = /[\u4E00-\u9FFF]+/g;
  return arr.some((item) => chineseRegex.test(item));
}
console.log(sortChinese(chineseArr)); // [ '大连', '东莞', '广州', '江门', '深圳' ]
