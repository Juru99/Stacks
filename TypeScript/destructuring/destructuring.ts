// 배열 Destructuring:
// 필요 없는 요소를 무시하기 위해 빈 쉼표(,)를 사용할 수도 있습니다.
const numbers: number[] = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(fourth); // 4

// 객체 Destructuring:
const person: { firstName: string; lastName: string } = {
  firstName: 'John',
  lastName: 'Doe',
};
const { firstName, lastName } = person;

console.log(firstName); // 'John'
console.log(lastName); // 'Doe'

// 기본값 할당:
// 객체나 배열 destructuring에서 원하는 속성이나 요소가 존재하지 않는 경우 기본값을 설정할 수 있습니다.
const person2: { firstName2: string; lastName2?: string } = {
  firstName2: 'John',
};
const { firstName2, lastName2 = 'Doe' } = person2;

console.log(firstName2); // 'John'
console.log(lastName2); // 'Doe'

//-----------------------------------------------------------------------

function dest1(student: boolean, age: number) {
  console.log(student, age);
}
// 기존 오브젝트를 더 간편하게 사용하기 위한 방법
let person3 = { student: true, age: 20 };
dest1(person3.student, person3.age);

function dest2({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}

// destructuring 방법
// let { student: student, age: age } = { student: true, age: 20 };
let { student, age } = { student: true, age: 20 };

// 함수 파라미터에 destructuring 가능
dest2({ student, age });

// 함수 만들기 예제
type UserType = {
  user: string;
  comment: number[];
  admin: boolean;
};

function post({ user, comment, admin }: UserType): void {
  console.log(user, comment, admin);
}

post({ user: 'kim', comment: [3, 5, 4], admin: false });

// 함수 만들기 예제2
type Etc = (number | string | boolean)[];

function print_etc([a, b, c]: Etc) {
  console.log(a, b, c);
}

print_etc([40, 'wine', false]);

// 돈 계산
// 10원, 50원, 100원, 500원, 1000원, 5000원, 10000원, 50000원
// 함수에 금액을 입력하면 결과물을 오브젝트 형식으로 반환한다.
let money: { [key: string]: number } = {};
function moneyChanger(amount: number, change: number): {} {
  let smallChange = amount % change;
  money[`${change}`] = ~~(amount / change);
  if (smallChange) {
    while (smallChange < change) {
      let firstNum = `${change}`.substring(0, 1);
      if (firstNum === '5') change /= 5;
      else if (firstNum === '1') change /= 2;
    }
    moneyChanger(smallChange, change);
  }

  return money;
}

console.log(moneyChanger(57370, 10000)); // {10: 2, 50: 1, 100: 3, 1000: 2, 5000: 1, 10000: 5}
