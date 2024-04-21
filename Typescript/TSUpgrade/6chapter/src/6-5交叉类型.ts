type I = { a: number; b: string };
type I2 = { d: string; c: boolean };

type I3 = I & I2;

let i3: I3 = { a: 1, b: "sdhajksd", c: false, d: "2" };

type I4 = string & number; // never

type I5 = string & string[];

let i: I = { a: 1, b: "s" };
let i2: I2 = { c: true, d: "e" };

function cross<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  const combine = {} as T & U;
  for (let k in obj1) (combine as any)[k] = obj1[k];
  for (let k in obj2) (combine as any)[k] = obj2[k];
  return combine;
}

console.log(cross(i, i2)); // { a: 1, b: 's', c: true, d: 'e' }
