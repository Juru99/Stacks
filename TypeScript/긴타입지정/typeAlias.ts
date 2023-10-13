// Type Alias (타입변수)
type Animal = string | number | undefined;
let 동물: Animal;

type Animal2 = { name: string; age: number };
let 동물2: Animal2 = { name: 'kim', age: 20 };

// const 변수는 등호로 재할당만 막는다.
// const로 담은 object 수정은 자유롭게 가능하다.
// 단, TypeScript를 사용하면 object 수정도 막을 수 있다. => readonly
const 출생지역 = 'seoul';
const 출생지역2 = { region: 'seoul' };
출생지역2.region = 'busan';

type GirlFriend = {
  readonly name: string;
  age?: number;
};
const 여친: GirlFriend = {
  name: '엠버',
};
// 여친.name = '유라'; // 에러 발생
// 실제 변환된 js파일은 에러 없음.

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY;
let 좌표: XandY = { x: 1, y: 2 };

type Name2 = string;
// type Name2 = number; 같은 이름의 type 변수 재정의 불가능
