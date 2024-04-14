export function quickSort<T>(arr: Array<T>): Array<T> {
  if (arr.length < 2) {
    return arr;
  }
  let left: Array<any> = [];
  let right: Array<any> = [];
  let mid = arr.splice(Math.floor(arr.length / 2), 1)[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(mid, quickSort(right));
}

const numArr = [1, 2, 7, 3, 4, 22, 5, 10, 6, 9];
console.log(quickSort(numArr));

let result = quickSort(numArr); // number []自动推断出来
result.forEach((item) => {
  item.toFixed(2);
});

export {};
