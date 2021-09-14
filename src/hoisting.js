alert('js script 引入放 header 中要等 js 加载并解析完成后才会渲染 body 中的内容')

// 变量提升

// 函数提升：可以执行
// 注意：只有函数表达式的声明的函数才会被提升
// 而 函数表达式无不会被提升
catName("Chloe"); // 输出：我的猫名叫 Chloe
function catName(name) {
  console.log("我的猫名叫 " + name);
}

// 变量提升 undefined
console.log(a) // 输出：undefined
var a = 12345