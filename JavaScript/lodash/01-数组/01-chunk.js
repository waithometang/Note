/**
 * chunk(array, [size=1])
    将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
参数
    array (Array): 需要处理的数组
    [size=1] (number): 每个数组区块的长度
返回
    (Array): 返回一个包含拆分区块的新数组（注：相当于一个二维数组）。
 */

function chunk(arr, size = 1) {
  if (!Array.isArray(arr) || arr.length < 1) {
    return arr;
  }
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const size = 3;
console.log(chunk(array, size)); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 0 ] ]
