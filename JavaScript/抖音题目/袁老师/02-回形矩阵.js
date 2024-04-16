/**
 * 回形矩阵
1       2       3       4
12      13      14      5
11      16      15      6
10      9       8       7
 *
 */
function InvoluteMatrix(n) {
  let rowStart = 0, // 开始行
    rowEnd = n - 1, // 结束行
    colStart = 0, // 开始列
    colEnd = n - 1, // 结束列
    sum = 1; // 填充数字
  const result = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );
  while (rowStart <= rowEnd && colStart <= colEnd) {
    // 从左往右
    for (let i = rowStart; i <= rowEnd; i++) {
      result[rowStart][i] = sum++;
    }
    rowStart++;
    // 从上到下
    for (let i = rowStart; i <= colEnd; i++) {
      result[i][colEnd] = sum++;
    }
    colEnd--;
    // 从右往左
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        result[rowEnd][i] = sum++;
      }
      rowEnd--;
    }
    // 从下到上
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        result[i][colStart] = sum++;
      }
      colStart++;
    }
  }
  return result;
}
const n = 4;
const result = InvoluteMatrix(n);
result.forEach((row) => {
  console.log(row.join("\t"));
});
