import { Inject } from "./Injectdecorator";
import { UserService } from "./UserService";
import CollectionInstance from "./Collection";
import Controller from "./ControllerDecorator";
import { get } from "./MethodDecorator";

// 执行顺序，属性装饰器->方法参数装饰器->方法装饰器->类装饰器

@Controller("/")
class UserController {
  @Inject("peopleService") // 依赖注入 创建和使用分离
  private peopleService?: UserService;

  @get("/login")
  public login() {
    //   let peopleService = CollectionInstance.get("userService");
    //   peopleService.login();
  }
}
// let controller = new Controller();
// controller.login();
export {};
