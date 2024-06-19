import { Inject } from "./Injectdecorator";
import { PeopleService } from "./PeopleService";
import CollectionInstance from "./Collection";
import ControllerDecorator from "./ControllerDecorator";
import MethodDecorator from "./MethodDecorator";

@ControllerDecorator
class Controller {
  @Inject("peopleService") // 依赖注入 创建和使用分离
  private peopleService?: PeopleService;

  @MethodDecorator("/login")
  public login() {
    let peopleService = CollectionInstance.get("userService");
    peopleService.login();
  }
}
let controller = new Controller();
controller.login();
export {};
