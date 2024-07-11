export class UserService {
  pname: string = "人民";
  constructor() {
    console.log("被调用了");
  }
  public login() {
    console.log(this.pname + "登录...");
  }
}
