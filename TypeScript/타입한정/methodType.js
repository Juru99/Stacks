"use strict";
let 함수표현식 = function (str) {
    return 0;
};
let 회원정보 = {
    name: 'kim',
    age: 25,
    plusOne(v) {
        return v + 1;
    },
    minusAge() {
        return --this.age;
    },
    changeName: v => {
        console.log(v);
    },
};
회원정보.minusAge();
console.log(회원정보.age); // 24
let cutZero = function (x) {
    let result = x.replace(/^0+/, '');
    return result;
};
function removeDash(x) {
    let result = x.replace(/-/g, '');
    return parseFloat(result);
}
function 필터함수(전화번호, 함수1, 함수2) {
    return 함수2(함수1(전화번호));
}
console.log(필터함수('010-1111-2222', cutZero, removeDash));
