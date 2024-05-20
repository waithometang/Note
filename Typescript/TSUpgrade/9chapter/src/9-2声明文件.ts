// 定义和使用声明文件
declare let/const
declare function
declare class
declare enum
declare namespace
// 接口和类型别名不需要
interface/type

// type CssStyle：css 方法返回一个新的 CssStyle 类型对象。这个对象并不需要与调用者是同一个对象，但必须符合 CssStyle 的结构。
// interface ICssStyle：css 方法返回 this，即调用该方法的对象本身。这样可以确保链式调用时总是返回同一个对象。
type CssStyle = {
    css: (arg1: string, arg2: string) => CssStyle 
}
interface CssStyle1 = {
    css: (arg1: string, arg2: string) => this 
}
declare function $(ready: () => void): void
declare function $(css: string): CssStyle

$("div").css("border", "1px solid red")
