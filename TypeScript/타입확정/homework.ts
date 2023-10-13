/*
(숙제1) 숫자여러개를 array 자료에 저장해놨는데

가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.

이걸 클리닝해주는 함수가 필요합니다. 

클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면

[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
*/

function solution1(x: (string | number)[]) {
  return x.map(v => {
    if (typeof v === 'string') return Number(v);
    else return v;
  });
}

console.log(solution1([123, '3']));

/*
만들함수( { subject : 'math' } )  //이 경우 'math'를 return
만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다 
*/

function solution2(x: { subject: string | string[] }) {
  if (typeof x.subject === 'string') return x.subject;
  else if (Array.isArray(x.subject)) return x.subject[x.subject.length - 1];
  else return '에러';
}

console.log(solution2({ subject: ['english', 'art'] }));
