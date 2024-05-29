class Person {
  constructor(public name: string, public age: number) {}
  getLegs(): number {
    return 2;
  }
  say(): void {
    console.log("hello:", this.name);
  }
}

const person: Person = new Person("zhangsan", 20);
person.say();
export {};
