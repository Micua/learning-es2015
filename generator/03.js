// 利用Generator实现暂缓执行机制

// 以前我们需要一个函数暂缓执行，可以使用高阶函数的方式

function foo1() {
  return function() {
    console.log('foo1执行了！');
    return 100 * 100;
  }
}

var fun = foo1();

setTimeout(function() {
  fun()
}, 2000);


// 通过生成器函数很简单

function* foo2() {
  console.log('foo2执行了！');
  return 100 * 100;
}

var generator = foo2();

setTimeout(function() {
  generator.next()
}, 2000);
