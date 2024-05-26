declare module "JQueryModule" {
  type CssStyle = {
    css: (arg1: string, arg2: string) => CssStyle;
  };
  function $(ready: () => void): void;
  function $(selector: any): CssStyle;
  // 嵌套命名空间
  namespace $ {
    function ajax(url: string, options?: any): void;
    function get(url: string, options?: any): void;
    function post(url: string, options?: any): void;
  }
  export = $;
}
