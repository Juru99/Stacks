"use strict";
let arr1 = [4, 5];
// array나 object 왼쪽에 ...이 작성된다면 괄호를 벗긴다.
let spreadArr = [1, 2, 3, ...arr1];
console.log(spreadArr); // [1, 2, 3, 4, 5]
