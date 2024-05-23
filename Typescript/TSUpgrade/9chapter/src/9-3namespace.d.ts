// 命名空间 使用namespace
declare namespace JQuery {
  export function $(ready: () => void): void;
  // 嵌套命名空间
  export namespace $ {
    function ajax(url: string, options?: any): void;
    function get(url: string, options?: any): void;
    function post(url: string, options?: any): void;
  }
}
