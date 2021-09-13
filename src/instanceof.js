/**
 * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
 * instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
 * 语法：object instanceof constructor
 * 
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof
 */

// 构造函数首字母大写
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}

const auto = new Car('Honda', 'Accord', 1998)

// console.log(auto instanceof Car) // true
// console.log(auto instanceof Object) // true



