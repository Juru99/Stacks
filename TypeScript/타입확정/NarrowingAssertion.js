"use strict";
function Narrowing(x) {
    let array = [];
    if (typeof x === 'number')
        array[0] = x;
}
function Assertion(x) {
    let array = [];
    array[0] = x;
}
// 옛날 as 문법
let name2 = 'kim';
name2;
