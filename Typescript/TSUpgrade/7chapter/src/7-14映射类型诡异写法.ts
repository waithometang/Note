type MouseEvent = {
  eventType: "click";
  x: number;
  y: number;
};

type KeyupEvent = {
  eventType: "keyup";
  key: number;
};

type Event = keyof (MouseEvent | KeyupEvent); // "eventType" 联合类型，获取的是共有属性
type Uni = (MouseEvent | KeyupEvent)[Event]; // "click" | "keyup"

type EventFun<E extends Record<string, any>, K extends keyof E> = {
  //   [P in E ]: (event: P) => any; 不能将类型“E”分配给类型“string | number | symbol”。
  //   [P in E as P extends E ? P[K] : never]: (event: P) => any;
  [P in E as P[K]]: (event: P) => any; // 简写
};
// 另外一种写法
type EventFunOther<E extends Record<string, any>, K extends keyof E> = {
  [P in E[K]]: (event: Extract<E, { [Key in K]: P }>) => any;
};
// type EventRec = {
//   click: (event: MouseEvent) => any;
//   keyup: (event: KeyupEvent) => any;
// };
type EventRec = EventFun<MouseEvent | KeyupEvent, "eventType">;
type EventRecOther = EventFunOther<MouseEvent | KeyupEvent, "eventType">;

export {};
