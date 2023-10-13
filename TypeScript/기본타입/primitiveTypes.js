"use strict";
let 이름 = 'kim';
let 배열명 = ['kim', 'park'];
let 오브젝트명 = { name: 'kim' };
let 오브젝트명2 = {};
let 문자열또는숫자 = 1234;
let 문자열또는문자열배열 = 'String';
function add(a, b) {
    if (typeof b === 'number')
        return a + b;
    return 0;
}
function print1(name) {
    console.log('안녕하세요' + name);
}
function print2(name) {
    console.log('안녕하세요' + name);
}
print1('Juru');
print2();
let Juru99 = ['Juru99', true];
let Juru = { name: 'Juru', age: '24' };
class User {
    constructor(name) {
        this.name = name;
    }
}
let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
let nums = [1, '2', 3];
let obj = { a: '123' };
let 모두;
모두 = 123;
모두 = [];
모두 = {};
let 모두안전;
모두안전 = [];
모두안전 = 123;
let 여기넣어 = 모두;
모두 - 1;
// let 여기넣어: number = 모두안전; // 에러 발생.
//모두안전 - 1;
