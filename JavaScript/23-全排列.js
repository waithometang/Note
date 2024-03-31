function permute(nums) {
  const result = [];

  function backtrack(start) {
    if (start === nums.length - 1) {
      result.push(nums.slice()); // 将当前排列加入结果集
      return;
    }
    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]]; // 交换当前元素与后续元素
      console.log(nums);
      backtrack(start + 1); // 递归生成下一个位置的排列
      [nums[start], nums[i]] = [nums[i], nums[start]]; // 恢复当前位置元素
    }
  }

  backtrack(0);
  return result;
}
function permute(nums) {
  const result = [];
  debugger;
  // 定义递归函数，参数为当前已排列的部分结果（path）
  function backtrack(path) {
    // 如果已排列的部分结果的长度等于原始数组的长度，表示已经完成了一种排列，将其添加到结果中
    if (path.length === nums.length) {
      result.push(path.slice()); // 使用 slice() 方法创建 path 的副本，避免直接引用
      return;
    }

    // 遍历未使用的数字，尝试将其添加到当前排列中
    for (let num of nums) {
      if (!path.includes(num)) {
        // 如果当前数字未被使用
        path.push(num); // 添加当前数字到排列中
        backtrack(path); // 递归调用 backtrack 函数，继续向下排列
        path.pop(); // 撤销当前数字的选择，回溯到上一步
      }
    }
  }

  // 调用递归函数，从空排列开始生成所有可能的排列
  backtrack([]);

  return result;
}

// 示例测试
const nums = [1, 2, 3];
console.log(permute(nums));
