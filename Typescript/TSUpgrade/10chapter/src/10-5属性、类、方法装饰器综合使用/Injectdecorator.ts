type MyPropDecorator = (
  targetClassProperty: any,
  propertyKey: string | symbol
) => void;

import "reflect-metadata"; // 获取元数据
// injectid:参数
export function Inject(injectid: string): MyPropDecorator {
  // targetClassProperty:类原型对象，propertyKey:属性名称
  return (targetClassProperty, propertyKey) => {
    // UserService
    let PropClass = Reflect.getMetadata(
      "design:type",
      targetClassProperty,
      propertyKey
    );
    let PropClassObj = new PropClass();
  };
}
