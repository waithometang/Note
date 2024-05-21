// Mapped Types
// 基于字符串索引类型
type Horse = {}
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};
 
const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};

// 通过keyof迭代泛型的key
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

// 修饰符：readonly:只读, ?:可选，  不加前缀-/+,默认为+
type OptionsFlags<Type> = {
    // -readonly [Property in keyof Type]: boolean; // 移除只读属性
    [Property in keyof Type]?: boolean; // 改为可选属性
};

interface Person {
    readonly name: string;
    readonly age: number;
    money?: number;
}
// type P = {
//     name: boolean;
//     age: boolean;
//     money?: boolean | undefined;
// }
type P = OptionsFlags<Person>
// type P1 = {
//     readonly name?: boolean | undefined;
//     readonly age?: boolean | undefined;
//     money?: boolean | undefined;
// }
type P1 = OptionsFlags<Person>

// 使用as重映射key
type User = {
    id: string;
    name: string;
    age: number;
};

type Remapping<T> = {
    [K in keyof T as `get${Capitalize<K & string>}`]: () => T[K]
}
// type R = {
//     getId: () => string;
//     getName: () => string;
//     getAge: () => number;
// }
type R = Remapping<User>;

type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};
interface Circle {
    kind: "circle";
    radius: number;
}
// type KindlessCircle = {
//     radius: number;
// }
type KindlessCircle = RemoveKindField<Circle>;

// 联合类型使用
type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}
type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };
// type Config = {
//     square: (event: SquareEvent) => void;
//     circle: (event: CircleEvent) => void;
// }
type Config = EventConfig<SquareEvent | CircleEvent>

// 配合使用条件类型
type ExtractPII<Type> = {
    [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};
type DBFields = {
    id: { format: "incrementing" };
    name: { type: string; pii: true };
};
//  type ObjectsNeedingGDPRDeletion = {
//     id: false;
//     name: true;
// }
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;

export {}
