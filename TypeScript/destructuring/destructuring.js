"use strict";
function dest1(student, age) {
    console.log(student, age);
}
// 기존 오브젝트를 더 간편하게 사용하기 위한 방법
let person = { student: true, age: 20 };
dest1(person.student, person.age);
function dest2({ student, age }) {
    console.log(student, age);
}
// destructuring 방법
// let { student: student, age: age } = { student: true, age: 20 };
let { student, age } = { student: true, age: 20 };
// 함수 파라미터에 destructuring 가능
dest2({ student, age });
function post({ user, comment, admin }) {
    console.log(user, comment, admin);
}
post({ user: 'kim', comment: [3, 5, 4], admin: false });
function print_etc([a, b, c]) {
    console.log(a, b, c);
}
print_etc([40, 'wine', false]);
// 돈 계산
// 10원, 50원, 100원, 500원, 1000원, 5000원, 10000원, 50000원
// 함수에 금액을 입력하면 결과물을 오브젝트 형식으로 반환한다.
let money = {};
function moneyChanger(amount, change) {
    let smallChange = amount % change;
    money[`${change}`] = ~~(amount / change);
    if (smallChange) {
        while (smallChange < change) {
            let firstNum = `${change}`.substring(0, 1);
            if (firstNum === '5')
                change /= 5;
            else if (firstNum === '1')
                change /= 2;
        }
        moneyChanger(smallChange, change);
    }
    return money;
}
console.log(moneyChanger(57370, 10000));
