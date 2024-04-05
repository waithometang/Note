/**
 * 并发任务控制
 */
function timeout(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}
// 题目：补充SuperTask，实现输出
class SuperTask {
  constructor(maxTaskLimit = 2) {
    this.maxTaskLimit = maxTaskLimit; // 最大任务并发数量
    this.currentTaskCount = 0; // 当前执行任务数量
    this.taskList = []; // 任务列表
  }
  add(task) {
    // 添加任务 返回promise
    return new Promise((resolve, reject) => {
      // 保存resolve,reject
      this.taskList.push({
        task,
        resolve,
        reject,
      });
      this._run();
    });
  }
  _run() {
    // 运行任务 当有任务并且当前执行任务数量小于并发数量
    while (this.currentTaskCount < this.maxTaskLimit && this.taskList.length) {
      this.currentTaskCount++;
      // 取出第一个任务
      const { task, resolve, reject } = this.taskList.shift();
      // 保证task为promise
      Promise.resolve(task())
        .then(resolve, reject)
        .finally(() => {
          this.currentTaskCount--;
          this._run();
        });
    }
  }
}

const superTask = new SuperTask();
function addTask(time, name) {
  superTask
    .add(() => timeout(time))
    .then(() => {
      console.log(`任务：${name}完成`);
    });
}
addTask(10000, 1); // 10s后输出 1
addTask(5000, 2); // 5s后输出 2
addTask(3000, 3); // 8s后输出 3
addTask(4000, 4); // 12s后输出 4
addTask(5000, 5); // 15s后输出 5
