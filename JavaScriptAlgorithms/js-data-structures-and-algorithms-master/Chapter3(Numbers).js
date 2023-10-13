0.1 + 0.2 === 0.3; // false

5 / 4; // 1.25

Math.floor(0.9); // 0
Math.floor(1.1); // 1

Math.round(0.49); // 0
Math.round(0.5); // 1
Math.round(2.9); // 3

Math.ceil(0.1); // 1
Math.ceil(0.9); // 1
Math.ceil(21); // 21
Math.ceil(21.01); // 22

function numberEquals(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}
0.1 + 0.2 == 0.3; // false due to little difference in floating point
numberEquals(0.1 + 0.2, 0.3); // true

Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true

Number.MAX_SAFE_INTEGER + 1.111 === Number.MAX_SAFE_INTEGER + 2.022; // false

Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2; // true

Number.MAX_VALUE + 1.111 === Number.MAX_VALUE + 2.022; // true

Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2; // true

Number.MIN_SAFE_INTEGER - 1.111 === Number.MIN_SAFE_INTEGER - 2.022; // false

Number.MIN_VALUE - 1 == -1; // true

Infinity > Number.MAX_SAFE_INTEGER; // true
-Infinity <
  Number.MAX_SAFE_INTEGER - // true
    Infinity -
    32323323 ==
  -Infinity - 1; // true

// 1. 소수
// 시간 복잡도 : O(n)
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  // check from 2 to n-1
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
isPrime(31);

// 시간 복잡도 : O(sqrt(n))
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  // 입력된 수가 2 또는 3인 경우 아래 반복문에서
  // 다섯 개의 숫자를 건너뛸 수 있다.
  if (n % 2 == 0 || n % 3 == 0) return false;

  for (var i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }

  return true;
}
isPrime(31);

// 2. 소인수분해
function primeFactors(n) {
  // n이 2로 나눠진다면 나눠질 수 있는 수만큼 2가 출력된다.
  while (n % 2 == 0) {
    console.log(2);
    n = n / 2;
  }

  // 이 지점에서 n은 홀수임이 확실하다. 따라서 수를 두 개씩 증가시킬 수 있다(주목: i = i + 2).
  for (var i = 3; i * i <= n; i = i + 2) {
    // i가 n을 나눌 수 있는 한 계속해서 i가 출력되고 n을 i로 나눈다.
    while (n % i == 0) {
      console.log(i);
      n = n / i;
    }
  }
  // 다음 조건문은 n이 2보다 큰 소수인 경우를 처리하기 위한 것이다.
  if (n > 2) {
    console.log(n);
  }
}
primeFactors(10); // prints '5' and '2'

// 3. 무작위 수 생성
Math.random() * 100; // floats between 0 and 100
Math.random() * 25 + 5; // floats between 5 and 30
Math.random() * 10 - 100; // floats between -100 and -90

Math.floor(Math.random()) * 100; // integer between 0 and 99
Math.round(Math.random()) * 25 + 5; // integer between 5 and 30
Math.ceil(Math.random()) * 10 - 100; // integer between -100 and -90

// 4. 모듈러 제곱거듭
function modularExponentiation(base, exponent, modulus) {
  // Math.pow() 로는 32비트 부동소수점까지만 저장할 수 있다. 너무 큰 수 계산 불가
  return Math.pow(base, exponent) % modulus;
}
modularExponentiation(4, 3, 5); // 4

function modularExponentiation(base, exponent, modulus) {
  if (modulus == 1) return 0;

  var value = 1;

  for (var i = 0; i < exponent; i++) {
    value = (value * base) % modulus;
  }
  return value;
}
modularExponentiation(4, 3, 5); // 4

// n보다 작은 모든 소수 출력
// 시간 복잡도 : O(sqrt(n))
function allPrimesLessThanN(n) {
  for (var i = 0; i < n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

allPrimesLessThanN(15);
// prints 2, 3, 5, 7, 11, 13

// 소인수 집합 확인하기

// 시간 복잡도 : O(log  divisor(number))
// 제수와 숫자에 따라 달라지는 로그 함수
// 2, 3, 5의 소수를 테스트할 때 2(log₂(n))의 로그는 가장 높은 시간 복잡도를 나타낸다.
function maxDivide(number, divisor) {
  while (number % divisor == 0) {
    number /= divisor;
  }
  return number;
}

// 시간 복잡도 : O(log₂(n))
function isUgly(number) {
  number = maxDivide(number, 2);
  number = maxDivide(number, 3);
  number = maxDivide(number, 5);
  return number === 1;
}

// 시간 복잡도 : O(n(log₂(n)))
// isUgly 함수는 maxDivide(숫자, 2)의 시간 복잡도에 의해 제한된다.
// 따라서 arrayNUglyNumbers는 maxDivide의 시간 복잡도의 n배이다.
function arrayNUglyNumbers(n) {
  var counter = 0,
    currentNumber = 1,
    uglyNumbers = [];

  while (counter != n) {
    if (isUgly(currentNumber)) {
      counter++;
      uglyNumbers.push(currentNumber);
    }

    currentNumber++;
  }

  return uglyNumbers;
}
arrayNUglyNumbers(12); // [ 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16 ]
