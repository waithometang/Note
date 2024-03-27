/**
 * 从最后一个元素开始，从数组中随机选出一个位置，交换，直到第一个元素
 *  从最后一个元素开始，向前遍历数组。
    对于当前遍历到的元素，随机生成一个小于或等于当前位置的索引。
    将当前元素与随机生成的索引位置的元素进行交换。
    继续向前遍历，直到第一个元素。
 */

/**
 * @description: 洗牌算法
 * @param {*} array
 * @return {*}
 */
function shuffling(array) {
  let current = array.length - 1;
  let random;
  while (current > 0) {
    random = Math.floor(Math.random() * current);
    console.log(random, current);
    [array[current], array[random]] = [array[random], array[current]];
    current--;
  }
  return array;
}
console.log(shuffling([1, 2, 3, 4, 5, 6, 7]));
