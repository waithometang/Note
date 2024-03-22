let arr = [1, 2, 3, 4, 5];
// 1、空数组，改变了原始地址
// arr = [];

// 2、splice， params1: 下标；params2：删除个数；params3：插入的值
// const res = arr.splice(0, arr.length);
// console.log(res);

// 3、length
arr.length = 0;
