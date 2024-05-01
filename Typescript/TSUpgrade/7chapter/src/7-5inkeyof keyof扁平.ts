// 实现类型扁平化

type Module = {
  menu: {
    setIndex: (index: string) => string;
    setCollapse: (index: string) => string;
  };
  tabs: {
    setTabs: (index: string) => void;
    setTabsList: (arr: number[]) => void;
    setEditTabs: (value: string) => void;
  };
};

// 1、模板字符串类型
type MB<T, U> = `${T & string}/${U & string}`;

// 2、拿到父模块属性名
type ModuleSpliKeys<T> = {
  // P:键，keyof T[P]:获取对象的key
  [P in keyof T]: MB<P, keyof T[P]>;
}[keyof T]; // [keyof T]获取对象的属性值
type TestModuleSpliKeys = ModuleSpliKeys<Module>;
// "menu/setIndex" | "menu/setCollapse" | "tabs/setTabs" | "tabs/setTabsList" | "tabs/setEditTabs"

// type Test = keyof Module;
// let t: Test = "menu" | "tabs";
export {};
