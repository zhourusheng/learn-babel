const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
}
const arr = [1, 2, 3, 4, 5]

/**
 * 1. for...in 一般用于遍历对象, 而不用于遍历数组
 * 2. for...in 遍历的是 key 值
 */
for (const key in obj) {
  console.log(key)
}

/**
 * 1. for... of 可以遍历所有具有 Iterator 接口的数据 (可迭代对象)
 * 2. for of 可遍历的包括：Array、String、Set、Map、类数组 NodeList、函数 Arguments、TypedArray
 * 3. 注意：for of 不能遍历对象 Object，因为 Object 没有提供 Iteratoe 接口
 */
for (const item of arr) {
  console.log(item)
}
