/**
 * 可索引签名，代表的是不确定的属性名
 */
interface Product {
  id: number;
  price: number;
  name: string;
  // 固定写法
  [propKey: string]: any; // 字符串索引签名  名称是string，值是any，值必须兼容以上所有类型
}

const p: Product = {
  id: 1,
  price: 100,
  name: "phone",
  // 可任意增加属性,以下都是符合的
  color: "red",
  [Symbol("foo")]: "foo", // symbol
  100: true,
};
