# TypeScript

타입스크립트 설치 : `npm install -g typescript`  
ts 파일을 읽을 수 없는 웹브라우저를 위한 ts -> js 컴파일 명령어 : `tsc -w`  
`tsconfig.json` : ts -> js 컴파일시 옵션 설정

- "target" : 자바스크립트 버전
- "module" : commonjs 문법 또는 import 문법 중 선택
- "noImplicitAny" : any라는 타입이 의도치 않게 발생할 경우 에러 표시
- "strictNullChecks" : null, undefined 타입에 조작을 시도하면 에러 표시

이외 쓸만한 설정들

```json
{
  "compilerOptions": {
    "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
    "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
    "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지
    "checkJs": true, // 일반 js 파일에서도 에러체크 여부
    "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
    "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
    "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
    "outDir": "./", //js파일 아웃풋 경로바꾸기
    "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
    "removeComments": true, //컴파일시 주석제거

    "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
    "noImplicitAny": true, //any타입 금지 여부
    "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기
    "strictFunctionTypes": true, //함수파라미터 타입체크 강하게
    "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
    "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
    "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

    "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
    "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
    "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기
    "noFallthroughCasesInSwitch": true //switch문 이상하면 에러내기
  }
}
```

React 프로젝트 - TypeScript 사용법 : `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`  
또는 `npx create-react-app my-app --template typescript`
Vue 프로젝트 - TypeScript 사용법 : `vue add typescript`

## 목차

[1. 기본 타입](#기본-타입)
[2. 타입 확정](#타입-확정)
[3. 긴 타입 지정](#긴-타입-지정)

## 기본 타입

[primitiveTypes.ts](./기본타입/primitiveTypes.ts)  
[homework.ts](./기본타입/homework.ts)

> 타입 : `string, number, boolean, null, undefined, bigint, [], {} 등`  
> 타입 지정 팁 : 변수 생성시 타입스크립트가 타입을 자동으로 부여한다. (타입지정 문법 생략가능)

```typescript
let 변수명: string = '값';

let 배열명: string[] = ['값1', '값2'];

let 오브젝트명: { name: string } = { name: 'kim' };

// ? : 값이 없어도 에러가 발생하지 않는 옵션
let 오브젝트명2: { name?: string } = {};

let 문자열또는숫자: string | number = 1234;

// 타입을 변수로 저장할 때 작명을 대문자로 시작한다.
// Union Type(|) : 2개 이상의 타입을 동시에 사용한다.
type LongType = string | string[];
let 문자열또는문자열배열: LongType = 'String';
let nums: (number | string)[] = [1, '2', 3];
let obj: { a: string | number } = { a: '123' };

// 함수는 파라미터와 반환값에 타입을 지정할 수 있다.
// 연산 시, 타입이 정확하지 않으면 에러가 발생한다.
// void : 반환값이 없을 때 사용
// 파라미터의 타입이 지정된 경우, 매개변수는 필수로 넣어줘야 한다.
function add(a: number, b: number | string): number {
  if (typeof b === 'number') return a + b;
}
function print1(name: string): void {
  console.log('안녕하세요' + name);
}
// ?: : 파라미터가 옵션인 경우
// name?: string === name?: (string | undefined)
function print2(name?: string): void {
  console.log('안녕하세요' + name);
}
print1('Juru');
print2();

// tuple 타입
type TupleType = [string, boolean];
let Juru99: TupleType = ['Juru99', true];

// index signature : 모든 key와 value가 string, string 외 새롭게 추가 불가능.
type ObjectAllType = {
  sex?: string;
  [key: string]: string;
};
let Juru: ObjectAllType = { name: 'Juru', age: '24' };

// class 타입
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// any 타입 : 타입 해제 문법
/*
일반 js 변수만드는 방법
타입 관련 버그가 발생해도 에러나지 않음
*/
let 모두: any;
모두 = 123;
모두 = [];
모두 = {};

// unknown 타입 : 모든 자료형 허용
let 모두안전: unknown;
모두안전 = 123;
모두안전 = [];

// -문제 없음-
let 여기넣어: string = 모두;
모두 - 1;

// 타입스크립트는 간단한 수학연산도 타입이 맞아야한다.
// unknown은 number 타입이 아니다.
// -에러 발생-
let 여기넣어: number = 모두안전;
모두안전 - 1;
```

## 타입 확정

[NarrowingAssertion.ts](./타입확정/NarrowingAssertion.ts)  
[homework.ts](./타입확정/homework.ts)  
Narrowing : 조건문으로 타입을 하나로 결정하는 방법

> typeof 변수명  
> 속성명 in 오브젝트자료  
> 인스턴스 instanceof 부모

Assertion : as 키워드로 임시로 타입을 해제하는 방법

> 변수명 as type

1. 임시로 에러해결용으로 사용 (타입을 a에서 b로 변경하는 용도가 아님)
2. 어떤 타입이 들어올 지 명확히 알고 있지만 컴파일러 에러가 방해할 때 사용

일반적으로 Narrowing을 조건문으로 하고 버그 추적이 어려운 as는 사용하지 않는다.  
as는 비상용으로 사용한다.

```typescript
function Narrowing(x: number | string) {
  let array: number[] = [];
  if (typeof x === 'number') array[0] = x;
}

function Assertion(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

// 옛날 as 문법
let name2: unknown = 'kim';
<number>name2;
```

## 긴 타입 지정

### typeAlias

[typeAlias.ts](./긴타입지정/typeAlias.ts)  
typeAlias : `type 키워드` 사용하여 긴 타입 지정
type의 속성앞에 `readonly`를 붙여 object 자료의 수정을 막을 수 있다.

```typescript
type GirlFriend = {
  readonly name: string;
  age?: number;
};
const 여친: GirlFriend = {
  name: '엠버',
};
// 여친.name = '유라'; // 에러 발생
// 실제 변환된 js파일은 에러 없음.
```

만들어진 여러 개의 타입을 하나의 타입으로 엮을 수 있다.

```typescript
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY;
let 좌표: XandY = { x: 1, y: 2 };
```

### interface

[interface.ts](./긴타입지정/interface.ts)  
extends로 type을 상속할 수 있다.

```typescript
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: 'kim' };
let 선생: Teacher = { name: 'kim', age: 20 };
```

type 키워드로도 extends가 가능하다. (& 기호)

```typescript
// & 기호(intersection type) : & 기호 왼쪽, 오른쪽 모두 만족하는 타입 생성
type Animals = { name: string };
type Cat = { age: number } & Animals;
```

type과 interface를 & 기호로 교차해서 사용도 가능하다.

### type과 interface의 차이점

- interface는 중복선언 가능 : 선언한 모든 타입이 합쳐짐.
  - 외부 라이브러리의 경우 interface를 많이 사용.
  - 다른 사람이 많이 이용할 것 같으면 object 타입 정할 때 interface 사용
  - 중복속성이 있으면 에러 발생.
- type은 중복선언 불가능

```typescript
type Animals = { name: string };
type Cat = { name: number } & Animals; // & 기호로 엮을 때는 에러 발생하지 않음.
let 야옹: Cat = { name: 'kim' }; // never 타입으로 에러 발생.
```
