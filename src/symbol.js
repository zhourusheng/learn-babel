/**
 * Symbol 是 ES6 提供的新的一种原始数据类型，标识独一无二的值
 * 就是为了解决对象属性名冲突的问题
 */

const hd = Symbol()
// console.log(hd) // Symbol()
// console.log(typeof hd) // symbol


/**
 * Symbol 函数可以接收一个字符串作为参数，用于描述创建的 Symbol 实例
 * 注意：Symbol 不是构造函数，不要使用就 new 关键字创建
 */

const s1 = Symbol('foo')
// console.log(s1) // Symbol(foo)


/**
 * Symbol 作为属性名
 * 注意：Symbol 作为属性名时不能使用点运算符，只能使用方括号 [] 赋值、取值
 */

const symbol1 = Symbol()

// 第一种写法
const a = {}
a[symbol1] = 'hello!'

// 第二种写法
const b = {
  [symbol1]: 'hello!!!'
}

console.log(a[symbol1])
console.log(b[symbol1])
