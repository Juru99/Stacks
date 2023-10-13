"use strict";
let 동물;
let 동물2 = { name: 'kim', age: 20 };
// const 변수는 등호로 재할당만 막는다.
// const로 담은 object 수정은 자유롭게 가능하다.
// 단, TypeScript를 사용하면 object 수정도 막을 수 있다. => readonly
const 출생지역 = 'seoul';
const 출생지역2 = { region: 'seoul' };
출생지역2.region = 'busan';
const 여친 = {
    name: '엠버',
};
let 좌표 = { x: 1, y: 2 };
// type Name2 = number; 같은 이름의 type 변수 재정의 불가능
