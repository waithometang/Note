/* 
    输入：[1,2,3,4,5,6,7] 旋转3步
    输出：[5,6,7,1,2,3,4]
*/
// 第一种思路：循环数组，先pop后unshift
// 时间复杂度O(n^2) 空间复杂度O(1)
function rotateArrWithStep(arr = [], k) {
  const len = arr.length;
  if (!k || len === 0 || len === 1) {
    return arr;
  }
  const step = Math.abs(k % len); // 取绝对值，求余是因为获取正确的旋转步数
  for (let i = 0; i < step; i++) {
    const item = arr.pop();
    if (item !== null || item !== undefined) {
      arr.unshift(item); // O(n)
    }
  }
  return arr;
}
// 第二种思路：先截取，在拼接
// 时间复杂度：O(1) 空间复杂度O(n)
function rotateArrWithStep2(arr = [], k) {
  const len = arr.length;
  if (!k || len === 0 || len === 1) {
    return arr;
  }
  const step = Math.abs(k % len);
  const arr1 = arr.slice(-step);
  const arr2 = arr.slice(0, len - step);
  return arr1.concat(arr2);
}
// 第三种思路：先将整个数组旋转，再分别对两个旋转部分进行交换
// 时间复杂度：O(n) 空间复杂度O(1)
function rotateArrWithStep3(arr = [], k) {
  const len = arr.length;
  if (!k || len === 0 || len === 1) {
    return arr;
  }
  reverse(arr, 0, len - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, len - 1);
  return arr;
}
function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
const result = [1, 2, 3, 4, 5, 6];
const step = 2;
const result1 = [1, 2, 3, 4, 5];
const step1 = 3;
const result2 = [1, 2, 3, 4, 5, 6, 7];
const step2 = "bg";
// 单元测试 jest
// describe("数组旋转", () => {
//   it("正常情况", () => {
//     const result = [1, 2];
//     const step = 2;
//     const res = rotateArrWithStep(result, step);
//     expect(res).toEqual([6, 7, 1, 2, 3, 4, 5]);
//   });
//   it("其他情况", () => {});
// });
console.log(rotateArrWithStep(result, step));
console.log(rotateArrWithStep2(result1, step1));
console.log(rotateArrWithStep3(result2, step2));
