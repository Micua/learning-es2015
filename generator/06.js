'use strict';

function* fibonacci() {
  // let [prev, curr] = [0, 1];
  let prev = 0,
    curr = 1;
  for (;;) {
    // [prev, curr] = [curr, prev + curr];
    prev = curr, curr = prev + curr;
    yield curr;
  }
}

for (let n of fibonacci()) {
  if (n > 10000) break;
  console.log(n);
}
