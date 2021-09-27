/**
 * JS 继承是通过原型来实现的
 * Class 是个语法糖，内部还是通过原型来实现继承
 */


// 1.使用 Object.getPrototypeOf() 方法可以获取一个对象的原型
const a = {}
const b = {}
console.log(Object.getPrototypeOf(a) === Object.getPrototypeOf(b)) // true