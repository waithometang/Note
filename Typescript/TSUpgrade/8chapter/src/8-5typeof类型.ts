// typeof类型
let str = "string"
// let s: "string"
let s: typeof str

function f() {
    return { x: 10, y: 3 };
}
// type F = {
//     x: number;
//     y: number;
// }
type F = ReturnType<typeof f>

// 局限性 TypeScript 有意限制了可以使用 typeof 的表达式类型。

export {}
