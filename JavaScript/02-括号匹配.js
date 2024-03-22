/* 
    括号匹配：(a{s[d]})
*/
// 实现思路：栈 通过进栈和出栈匹配
// 时间复杂度O(n) 空间复杂度O(n)
function matchBracket(str) {
  const len = str.length;
  if (len === 0) {
    return true;
  }
  const stack = [];
  const leftSymbol = "{[(";
  const rightSynbol = "}])";
  for (let i = 0; i < len; i++) {
    const item = str[i];
    if (leftSymbol.includes(item)) {
      // 进栈
      stack.push(item);
    } else if (rightSynbol.includes(item)) {
      // 获取栈顶元素匹配
      const pop = stack[stack.length - 1];
      if (isMatch(pop, item)) {
        // 出栈
        stack.pop();
      } else {
        // 不匹配 直接返回
        return false;
      }
    }
  }
  return stack.length === 0;
}
function isMatch(left, right) {
  if (left === "{" && right === "}") {
    return true;
  }
  if (left === "(" && right === ")") {
    return true;
  }
  if (left === "[" && right === "]") {
    return true;
  }
  return false;
}
const str1 = ""; // true
const str2 = "1(23"; // fasle
const str3 = "[()]"; // true
const str4 = "(12{e})]"; // fasle
console.log(matchBracket(str1));
console.log(matchBracket(str2));
console.log(matchBracket(str3));
console.log(matchBracket(str4));
