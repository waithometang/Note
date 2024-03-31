/**
 * proxy 代理
 *
 */
function createProxy(value = 0) {
  const toPrimitive = () => value;
  return new Proxy(
    {},
    {
      get(target, propKey, receiver) {
        // 对象转原始值
        if (propKey === Symbol.toPrimitive) {
          return toPrimitive;
        } else {
          return createProxy(value + Number(propKey));
        }
      },
    }
  );
}

const add = createProxy();
const result = add[1][2][3] + 4;
