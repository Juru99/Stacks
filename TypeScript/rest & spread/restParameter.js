"use strict";
// 몇 개의 파라미터가 들어올지 모를 때 사용
// 다른 파라미터가 있다면 맨 뒤에 사용
// rest parameter 자리에 들어온 데이터는 전부 []에 담아줌
// => 배열이기 때문에 타입 지정할 때도 []을 작성해야함.
function f_rest(...params) {
    console.log(params); // [1, 2, 3, 4, 5, 6]
}
f_rest(1, 2, 3, 4, 5, 6);
// 숫자 여러 개 입력하면 최댓값 return 해주는 함수
function f_max(...nums) {
    let result = 0;
    nums.forEach(num => {
        if (result < num)
            result = num;
    });
    return result;
}
console.log(f_max(5, 7, 2, 3)); // 7
