// 注意事项

// function foo() {
//   yield 1;
// }
// // yield 不可以用于普通函数体
// var generator = foo();

// var arr = [1, [[2, 3], 4], [5, 6]];

// var flat = function* (a) {
//   a.forEach(function (item) {
//     if (typeof item !== 'number') {
//       yield* flat(item);
//     } else {
//       yield item;
//     }
//   }
// };

// for (var f of flat(arr)){
//   console.log(f);
// }

// var arr = [1, [[2, 3], 4], [5, 6]];

// var flat = function* (a) {
//   var length = a.length;
//   for (var i = 0; i < length; i++) {
//     var item = a[i];
//     if (typeof item !== 'number') {
//       yield* flat(item);
//     } else {
//       yield item;
//     }
//   }
// };

// var generator = flat(arr);
// console.log(generator.next());
// // for (var f of flat(arr)) {
// //   console.log(f);
// // }
//
//

function* foo() {
  // var input  = yield;

  // console.log(input);
  //
  // console.log(100 + yield 10);
  console.log(100 + (yield 10));
}

foo().next();
