import "reflect-metadata";
export default function ControllerDecorator(rootPath: string) {
  return function <T extends { new (...args: any): any }>(targetClass: T) {
    Object.keys(targetClass.prototype).forEach((methodname) => {
      let routerpath = Reflect.getMetadata(
        "path",
        targetClass.prototype,
        methodname
      );
      console.log("routerpath", routerpath);
    });
  };
}
