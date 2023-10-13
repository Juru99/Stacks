let 위: 'top';
let 아래: 'bottom';
let 좌우: 'left' | 'right';
좌우 = 'left';
function f_sex(sex: '남' | '여'): 1 | 0 | -1 {
  if (sex === '남') return 1;
  else if (sex === '여') return 0;
  else return -1;
}

/*
Q. 이런 함수는 어떻게 만들까요?
- '가위', '바위', '보' 문자들만 파라미터로 입력할 수 있고
- '가위', '바위', '보' 라는 문자들만 담을 수 있는 array 자료만 return 할 수 있습니다.
- 예를 들면 ['가위', '보', '가위'] 이런거 return 가능
- ['가위', '바보'] 이런거 return하면 에러나야함 
*/

function rock(hand: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
  return ['가위', '보'];
}

let 자료: { name: 'kim' } = {
  name: 'kim',
};

let 자료3 = {
  name: 'kim',
} as const;

function 함수(값: 'kim') {} // kim이라는 타입만 들어올 수 있다.

함수(자료.name);
함수(자료3.name);
