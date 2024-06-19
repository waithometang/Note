export class UserService {
  pname: string = "人民";
  public login() {
    console.log(this.pname + "登录...");
  }
}
