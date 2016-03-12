// 配合while 实现迭代器

// yield 本身的定义是产出的意思
// 每一次 yield 过后函数本身进入一个『冻结状态』

var count = 1;

function* getGenerator() {
  console.log(`第${count++}次产出内容`);
  yield 'object 1';
  console.log(`第${count++}次产出内容`);
  yield 'object 2';
  console.log(`第${count++}次产出内容`);
  yield;
  console.log(`第${count++}次产出内容`);
  yield 'object 3';
  // 如果生成器函数中最终都没有 return 在结束时和普通函数一样拿到 undefined
  return 'ending';
}

// // 获取一个生成器（类似其他语言中的迭代器） 此时该函数并不执行，返回的也不是函数运行结果
// var generator = getGenerator();

// console.log(typeof generator);

// // 向生成器 要求 生产一个新的元素
// var current = generator.next();

// // 不断迭代内部可生产元素，直到完成
// while (!current.done) {
//   console.log(current);
//   current = generator.next();
// }

// // 最后一次 value 拿到的就是最终 return 的结果
// // 如果生成器函数中最终都没有 return 在结束时和普通函数一样拿到 undefined
// console.log(current);


// 以上代码可以使用另外一个新特性 for of 代替
// 这种方式拿不到最后return的值
for(var item of getGenerator()){
  // 每个item就是一个被产出的元素值（不再是上面写道的current）
  console.log(item);
}
