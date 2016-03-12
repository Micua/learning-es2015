// yield 返回值的问题

// var count = 1;

// function* getGenerator() {
//   console.log(`第${count++}次产出内容`);
//   count = yield count;
//   console.log(count);
//   yield count;
// }

// var generator = getGenerator();

// console.log(generator.next());
// console.log(generator.next(100));

'use strict'

function wrapper(generatorFunction) {
  return function () {
    let generatorObject = generatorFunction(arguments);
    generatorObject.next();
    return generatorObject;
  };
}

const wrapped = wrapper(function* () {
  console.log(`First input: ${yield}`);
  return 'DONE';
});

wrapped().next('hello!')
