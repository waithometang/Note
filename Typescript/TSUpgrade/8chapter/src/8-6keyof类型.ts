// 两者一样
type Point = { x: number; y: number }
// type P = keyof Point
type P = keyof Point
// type K = "x" | "y"
type Keys<T> = T extends any ? T : never
type K = Keys<keyof Point>

// 数字索引
type Arrayish = { [n: number]: unknown };
// type A = number
type A = keyof Arrayish;

// 字符串索引
type Mapish = { [k: string]: boolean };
// type M = string | number   obj[0]与obj["0"]一样
type M = keyof Mapish;

export {}
