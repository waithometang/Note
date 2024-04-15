var a = { age: 18 };
var b = a;
a.prop = b = { age: 19 };
console.log(a); // { age: 18, prop: { age: 19 } }
console.log(b); // { age: 19 }
/**
 * 栈              堆
 * a    ->         {age:18}
 * b    ->         {age:18}
 *
 * a.prop ->       {age:18,prop:未知}
 *
 * b     ->         {age:19}
 *
 * a.prop  ->       {age:19}
 *
 */
