class ArrayList<T> {
  arr!: Array<T>;
  index!: number;
  constructor() {}
  add(ele: T) {
    this.arr[this.index++] = ele;
  }
  get(index: number) {
    return this.arr[index];
  }
}

let arr = new ArrayList<number>();
arr.add(1);
arr.get(0);

export {};
