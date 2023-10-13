let 이름: string = 'kim';
let 배열명: string[] = ['kim', 'park'];
let 오브젝트명: { name: string } = { name: 'kim' };
let 오브젝트명2: { name?: string } = {};

let 문자열또는숫자: string | number = 1234;

type LongType = string | string[];
let 문자열또는문자열배열: LongType = 'String';

function add(a: number, b: number | string): number {
  if (typeof b === 'number') return a + b;
  return 0;
}
function print1(name: string): void {
  console.log('안녕하세요' + name);
}
function print2(name?: string): void {
  console.log('안녕하세요' + name);
}
print1('Juru');
print2();

type TupleType = [string, boolean];
let Juru99: TupleType = ['Juru99', true];

type ObjectAllType = {
  sex?: any;
  [key: string]: string;
};
let Juru: ObjectAllType = { name: 'Juru', age: '24' };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let project: { member: string[]; days: number; started: boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};

let nums: (number | string)[] = [1, '2', 3];
let obj: { a: string | number } = { a: '123' };

let 모두: any;
모두 = 123;
모두 = [];
모두 = {};

let 모두안전: unknown;
모두안전 = [];
모두안전 = 123;

let 여기넣어: string = 모두;
모두 - 1;

// let 여기넣어: number = 모두안전; // 에러 발생.
//모두안전 - 1;
