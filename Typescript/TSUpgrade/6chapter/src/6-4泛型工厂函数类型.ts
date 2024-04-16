/**
 * 泛型工厂函数类型定义：可以代表任意一个类构造函数的函数类型
 */

class Bank {
  public address: string = "bj";
  public name: string = "zs";
  static count: number;
  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
  loan(): void {
    console.log(this.name + "银行贷款");
  }
}
type BankType = new (...args: any) => Bank;
const BankInstance: BankType = Bank;
const bank = new Bank("lisi", "gz");
bank.loan();

export {};
