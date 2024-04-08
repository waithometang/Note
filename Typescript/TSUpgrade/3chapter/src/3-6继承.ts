type Gender = "male" | "female";
class Animal {
  color: string;
  age: number;
  gender: Gender;
  constructor(color: string, age: number, gender: Gender) {
    this.color = color;
    this.age = age;
    this.gender = gender;
  }
  say() {
    console.log("i am animal");
  }
}

class Dog extends Animal {
  name: string;
  constructor(color: string, age: number, gender: Gender, name: string) {
    // 调用super关键字，父类构造函数
    super(color, age, gender);
    this.name = name;
  }
  say() {
    super.say();
    console.log("i am dog");
  }
}

const d = new Dog("black", 2, "female", "wangcai");
console.log(d);
export {};
