// interface Shape {
//   color: string;
//   width: number;
//   line: number;
// }

// let square: Shape = { color: 'red', width: 100, line: 4 };

// & 기호(intersection type) : & 기호 왼쪽, 오른쪽 모두 만족하는 타입 생성
type Animals = { name: string };
type Cat = { age: number } & Animals;

interface Student {
  name: string;
}
interface Student {
  subject: string;
}
interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: 'kim', subject: '전과목' };
let 선생: Teacher = { name: 'kim', subject: '과학', age: 20 };

/*
(숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
*/
interface 상품타입 {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: 상품타입 = {
  brand: 'Samsung',
  serialNumber: 1360,
  model: ['TV', 'phone'],
};

/*
(숙제2) array 안에 object 여러개가 필요합니다.
쇼핑몰 장바구니를 구현하려고 하는데 
 */
interface Cart {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [
  { product: '청소기', price: 7000 },
  { product: '삼다수', price: 800 },
];

/*
(숙제3) 위에서 만든 타입을 extends 해봅시다.
갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다. 
{ product : '청소기', price : 7000, card : false }
*/
interface newCart extends Cart {
  card: boolean;
}

/*
(숙제4) object 안에 함수를 2개 넣고 싶은데요 
1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
이 object 자료를 어떻게 만들면 될까요? 
interface를 이용해서 object에 타입지정도 해보십시오. 
*/
interface Calculator {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}
let 계산기: Calculator = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
