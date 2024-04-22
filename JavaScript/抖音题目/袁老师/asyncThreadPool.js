/**
 * 线程池-并发控制
 */
async function asyncThreadPool(limit, array, handler) {
  const result = []; // 结果
  const executing = []; // 当前执行的任务数量
  for (let item of array) {
    const p = Promise.resolve().then(() => handler(item));
    result.push(p);
    if (limit <= executing.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= limit) {
        await Promise.race(executing);
      }
    }
    executing.push(p);
  }
  return Promise.all(result);
}
