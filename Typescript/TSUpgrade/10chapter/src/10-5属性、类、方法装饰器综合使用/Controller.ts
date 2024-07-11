import { Inject } from "./Injectdecorator";
import { UserService } from "./UserService";
import CollectionInstance from "./Collection";
import ControllerDecorator from "./ControllerDecorator";
import MethodDecorator from "./MethodDecorator";

@ControllerDecorator
class Controller {
  @Inject("userService") // 依赖注入 创建和使用分离
  private userService?: UserService;

  @MethodDecorator("/login")
  public login() {
    let peopleService = CollectionInstance.get("userService");
    peopleService.login();
  }
}
let controller = new Controller();
controller.login();
export {};
