# 자바스크립트 알고리즘

## 목차

[1장. 빅오 표기법](#1장-빅오-표기법)
[2장. 자바스크립트 특징](#2장-자바스크립트-특징)
[3장. 자바스크립트 숫자](#3장-자바스크립트-숫자)
[4장. 자바스크립트 문자열](#4장-자바스크립트-문자열)

## 1장. 빅오 표기법

[예제](<./Chapter1(Big-O%20Notation).js>)

> 빅오 표기법은 알고리즘의 최악의 경우 복잡도를 측정한다.  
> 빅오 표기법에서 n은 입력의 개수를 나타낸다.

![빅오 표기법](Big_O.png)

O(1) : 상수 시간 (ex) `for(let i=0; i < 1000; i++)`  
O(log n) : 로그 시간 (ex) `for(let i=0; i < n; i * 2)`  
O(n) : 선형 시간  
O(n^2) : 2차 시간  
O(n^3) : 3차 시간  
O(n^n) : n차 시간  
O(∞) : 무한 루프 (ex) `while(true)`

### 빅오 표기법 규칙

- 계수 법칙 : 입력 크기와 연관되지 않는 상수 무시 => 계수/상수 제거
- 합의 법칙 : 동일한 블록 레벨의 시간복잡도를 더할 수 있다. => 빅오 더하기
- 곱의 법칙 : 중첩된 블록의 시간복잡도를 곱할 수 있다. => 빅오 곱하기
- 다항 법칙 : f(n)이 k차 다항식이면 f(n) = O(n^k) => 루프를 조사해 빅오 표기법의 다항 결정
- 전이 법칙

(ex) 숫자와 관계 없이 n번 더한 후 1번 더하면 n + 1 | 시간 복잡도 : O(n)  
(ex) 반복문이 5\*n 까지면 f(n) = 5n, n까지면 f(n) = n | 시간 복잡도 : O(n)  
(ex) f(n) = 5n^2 | 시간 복잡도 : O(n^2)

## 2장. 자바스크립트 특징

[예제](<./Chapter2(UniqueParts).js>)

> `var` : 변수를 어디서(블록 내부) 선언하든 함수의 맨 앞으로 이동한다.  
> 단, false인 조건문은 건너 뛴다.

- `typeof 연산자`를 배열에 사용해도 `object`를 반환한다.
- 기본 등가 확인 연산자인 `==`과 `===`는 문자열, 숫자, 불리언 같은 비객체형에만 사용할 수 있다. 객체에 대한 등가 확인을 구현하려면 객체의 각 속성을 확인해야 한다.

### 참/거짓

- false로 평가되는 경우 : `false`, `NaN`, `0`, `undefined`, 빈 문자열(`''`, `""`), `null`
- true로 평가되는 경우 : `true`, 비어 있지 않은 문자열, 0이 아닌 다른 숫자, 비어 있지 않은 객체

## 3장. 자바스크립트 숫자

[예제](<./Chapter3(Numbers).js>)

> 자바스크립트의 모든 숫자는 64비트 부동소수점 형태이다.  
> 십진분수로 인해 자바스크립트에서 부동소수점 체계가 반올림 오류를 일으킬 수 있다.

```javascript
0.1 + 0.2 === 0.3; // false
```

- 가능한 가장 작은 부동소수점 증가를 얻기 위해서는 `Number.EPSILON` 을 사용해야 한다.
- `Number.EPSILON` : 두 개의 표현 가능한 숫자 사이의 가장 작은 간격을 반환한다.

### 자바스크립트 숫자 범위

- `Number.MAX_VALUE` : 가능한 가장 큰 부동 소수점 반환
  - -> `1.7976931348623157e + 308`
- `Number.MAX_SAFE_INTEGER` : 가장 큰 정수 반환
  - => 서로 다른 소수를 더한 값은 같지 않다.
- `Number.MIN_VALUE` : 가능한 가장 작은 부동 소수점 반환
  - => 음수가 아닌 0에 가장 가까운 부동소수점
  - -> `5e - 324`
  ```javascript
  Number.MIN_VALUE - 1 == -1; // true
  ```
- `Number.MIN_SAFE_INTEGER` : 가장 작은 정수 반환
  - => 서로 다른 소수를 뺀 값은 같지 않다.
  - -> `-9007199254740991`

```
-Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity
```

### 숫자 알고리즘

> 가장 효율적인 규칙을 찾는 것 => 가장 좋은 알고리즘의 비결

#### 1. 소수

> 암호화와 해싱의 기반이 된다.

**[알고리즘]**

- ⓐ 2와 3을 제외한 모든 소수는 `6k ± 1`의 형태를 지닌다.
- ⓑ n의 제곱근이 소수가 아닌 정수라면 n은 소수가 아니다.
- **시간 복잡도 : O(sqrt(n))**

```javascript
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
```

#### 2. 소인수분해

> 주어진 숫자를 만들기 위한 소수들의 곱

**[알고리즘]**

1. n을 2로 나눌 수 있는 만큼 나눈다. (2 출력)
2. i를 2씩 증가시키며 n을 나눌 수 있는 만큼 i로 나눈다. (i 출력)
3. n이 2보다 크다면 n을 출력한다.

- **시간 복잡도 : O(sqrt(n))**

```javascript
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
```

#### 3. 무작위 수 생성

> 어떤 조건이 어떤 식으로 동작하는지 확인

- `Math.random()` : 0과 1 사이의 부동소수점 반환
  - 범위 변경 : 범위에 해당하는 숫자를 연산
  - 무작위 정수 : `Math.floor()`, `Math.round()`, `Math.ceil()`

#### 4. 모듈러 제곱거듭

> 컴퓨터 과학, 공개키 암호화 알고리즘 분야에서 사용된다.

- `(x^y) % p` : x는 기저, y는 지수, p는 모듈러
- 강력한 암호의 경우 기저가 최소 256비트(78개 수)
- -> `Math.pow()`로는 32비트 부동소수점까지만 저장할 수 있어 실제로 활용하기 어렵다.

**[수학적 속성]** : 1부터 지수까지 순회하면서 현재 모듈러를 마지막 모듈러와 곱함으로써 매번 재계산 가능

```
c % m = (a b) % m
c % m = [(a % m)(b % m)] % m
```

**[의사코드]**

1. `값 = 1` 로 설정한다. 현재 지수는 0이다.
2. 현재 지수를 1만큼 증가시킨다.
3. 현재 지수가 목표 지수가 될 때까지 `값 = (값 * 기저) mod 모듈러` 로 설정한다.

- **시간 복잡도 : O(n)**

```javascript
function modularExponentiation(base, exponent, modulus) {
  if (modulus == 1) return 0;

  var value = 1;

  for (var i = 0; i < exponent; i++) {
    value = (value * base) % modulus;
  }
  return value;
}
```

## 4장. 자바스크립트 문자열

[예제](<./Chapter4(Strings).js>)

### 문자열 함수

#### 1. 문자열 접근 : `.charAt(index)`, `.subString(startIndex[, endIndex])`

#### 2. 문자열 비교 : `>`, `<`

#### 3. 문자열 검색 : `.startsWith('문자열')`, `.endsWith('문자열')`

**indexOf(searchValue[, fromIndex])**

- 일치하는 문자열을 발견하지 못한 경우 `-1`이 반환된다
- 대소문자 구분

```javascript
// 어떤 문자열 내에 특정 문자열이 존재하는지 확인
function existsInString(stringValue, search) {
  return stringValue.indexOf(search) !== -1;
}
console.log(existsInString('red', 'r')); // prints 'true';
console.log(existsInString('red', 'b')); // prints 'false';
```

```javascript
var str = "He's my king from this day until his last day",
  count = 0,
  pos = str.indexOf('a');

// str.indexOf('a')가 while에 걸려서 문자열의 끝까지 도는 것
while (pos !== -1) {
  console.log(pos); // pos = 24 38 43
  count++;
  pos = str.indexOf('a', pos + 1);
}
console.log(count); // prints '3'
```

#### 4. 문자열 분해 : `.split(separator)`

> 하나의 매개변수(분리자)를 입력받아 부분 문자열 배열을 생성한다.

#### 5. 문자열 바꾸기 : `.replace(string, replaceString)`

> 문자열 변수 내에 특정 문자열을 다른 문자열로 대체한다.

##### 정규 표현식 : 검색 패턴을 정의한 문자열들의 집합

- **선택 매개변수 일치 관련 설정**
  - i : 대소문자를 구분하지 않고 일치하는 문자열을 검색한다.
  - g : 전역적으로 일치하는 문자열을 검색한다(일치하는 문자열을 처음 발견한 이후 멈추는 대신 모든 일치하는 문자열을 찾는다.)
  - m : 다중열 문자열에 대해서도 일치하는 문자열을 검색한다.
- **기본 객체 RegExp**
  - `문자열.search(검색문자열)` : 문자열 내에 일치하는 문자열을 찾는다. 일치하는 문자열의 인덱스를 반환한다. 일치하지 않으면 `-1` 반환
  - `문자열.match(검색문자열)` : 일치하는 문자열을 찾는다. 문자열이 일치하면 검색 문자열을 반환한다. 일치하지 않으면 `null` 반환
  - `정규표현식.exec(문자열)` : 문자열 내에 일치하는 문자열을 찾는다. 일치하는 첫 번째 문자열을 반환한다.
  - `정규표현식.test(문자열)` : 문자열 내에 일치하는 문자열을 찾는다. true 또는 false를 반환한다.
- **기본 정규 표현식**
  - `^` : 문자열/줄의 시작을 나타낸다.
  - `\d` : 모든 숫자를 찾는다.
  - `[abc]` : 괄호 내의 모든 문자를 찾는다.
  - `[^abc]` : 괄호 내의 문자들을 제외한 모든 문자를 찾는다.
  - `[0-9]` : 괄호 내의 모든 숫자를 찾는다.
  - `[^0-9]` : 괄호 내의 숫자들을 제외한 모든 문자를 찾는다.
  - `(x|y)` : x 또는 y를 찾는다.
- **자주 사용하는 정규 표현식**
  - `/\d+/` : 숫자를 포함하는 문자
  - `/^\d+$/` : 숫자만 포함하는 문자
  - `/^[0-9]*.[0-9]*[1-9]+$/` : 부동소수점 문자
  - `/[a-zA-Z0-9]/` : 숫자와 알파벳만 포함하는 문자
- **질의 문자열** : `/([^?=&]+)(=([^&]*))/`
  - 웹 애플리케이션에서 웹 URL은 대개 경로 찾기나 데이터베이스의 질의 목적의 매개변수를 포함한다.

```javascript
// SELECT LCD, TV FROM database WHERE Category = 4 AND Product_id = 2140;
var uri =
  'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv';
var queryString = {};
uri.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function ($0, $1, $2, $3) {
  queryString[$1] = $3; // $1은 속성, $3은 값 기준
  console.log(`$0 : ${$0}`); // $0은 '?', '&' 기준
  console.log(`$2 : ${$2}`); // $2는 '=' 기준
  console.dir(`queryString : ${queryString}`);
});
console.log('ID: ' + queryString['product_id']); // ID: 2140
console.log('Name: ' + queryString['product_name']); // Name: undefined
console.log('Category: ' + queryString['category']); // Category: 4
```

### 인코딩

> 컴퓨터 과학 분야에서 효율적인 전송 혹은 저장을 위해 문자들을 특수 포맷으로 표현하는 포괄적인 개념  
> 모든 컴퓨터 파일 유형은 특정 구조로 인코딩된다.

#### Base64 인코딩

> `btoa()` : 문자열로부터 Base64 인코딩된 ASCII 문자열을 생성한다. 문자열의 각 문자는 바이트로 취급된다.  
> `atob()` : Base64 인코딩을 사용해 인코딩된 자료의 문자열을 디코딩한다.

```javascript
console.log(btoa('hello I love learning to computer program'));
console.log(atob('aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0'));
```

### 문자열 단축

Bit.ly와 같은 단축 URL을 지닌 사이트가 동작하는 방법 : 단순화된 URL 압축 알고리즘 사용

1. 데이터베이스가 URL에 대해 정수 기반 고유 ID를 생성한다.
2. 정수 ID는 인코딩되어 문자열로 단축된다.

### 암호화

> TLS : 서버와 클라이언트 간에 암호화된 연결을 수립하기 위한 표준 보안 기술

SSL 경고 메시지 - 브라우저와 서버 간에 데이터가 암호화되지 않을 수도 있음을 의미.

1. 서버는 브라우저에게 자신의 비대칭 공개 키를 전송한다.
2. 브라우저는 현재 세션을 위한 대칭 키를 생성한다. 해당 대칭 키는 서버의 비대칭 공개 키로 암호화된다.
3. 서버는 자신의 비밀 키로 브라우저의 세션을 복호화해 세션 키를 추출한다.
4. 이제 두 시스템 모두 세션 키를 가지고 있어 세션 키를 사용해 자료를 안전하게 전송한다.

#### RSA - 가장 널리 사용되는 공개 키 암호화 알고리즘

> RSA : 큰 정수의 인수분해 난이도에 기반한 암호화 알고리즘

- 두 개의 큰 소수와 보조 값이 공개 키로 생성된다.
- 누구나 메시지를 암호화하기 위해 공개 키를 사용할 수 있지만 소인수를 지닌 사람만이 메시지를 해독할 수 있다.

1. 키 생성 : 공개 키와 비밀 키가 생성된다. 생성된 키 생성 방법 역시 비밀이어야 한다.
2. 암호화 : 공개 키를 통해 비밀 메시지를 암호화할 수 있다.
3. 복호화 : 비밀 키로만 암호화된 메시지를 복호화할 수 있다.

##### RSA 알고리즘

1. 두 개의 소수 p와 q를 선택한다. 대개 큰 소수를 선택한다.

- p와 q의 곱을 n이라고 표기한다.
- `(p-1)`과 `(q-1)`의 곱을 phi라고 표기한다.

2. 두 개의 지수 e와 d를 선택한다.

- e는 일반적으로 3이다. 2보다 큰 다른 값을 사용할 수 있다.
- d는 `(e * d) % phi = 1`인 값이다.

```javascript
// RSA 알고리즘
function modInverse(e, phi) {
  var m0 = phi,
    t,
    q;
  var x0 = 0,
    x1 = 1;

  if (phi == 1) return 0;

  while (e > 1) {
    // q는 몫이다.
    q = Math.floor(e / phi);

    t = phi;

    // 여기서 phi는 나머지다.
    // 유클리드 알고리즘과 동일하게 수행된다.
    (phi = e % phi), (e = t);

    t = x0;

    x0 = x1 - q * x0;

    x1 = t;
  }

  // x1을 양수로 만든다.
  if (x1 < 0) x1 += m0;

  return x1;
}
modInverse(7, 40); // 23

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

function RSAKeyPair(p, q) {
  // p와 q가 소수인지 확인해야 한다.
  if (!(isPrime(p) && isPrime(q))) return;

  // p와 q가 동일하지 않다는 것을 확인해야 한다.
  if (p == q) return;

  var n = p * q,
    phi = (p - 1) * (q - 1),
    e = 3,
    d = modInverse(e, phi);

  // Public key: [e,n], Private key: [d,n]
  return [
    [e, n],
    [d, n],
  ];
}
```

## 가정

for 조건 왼쪽 제곱 : sqrt
for 변경 곱하기 : log
while % : log

```javascript
/*
i * i -> sqrt
n -> n
i = i * 2 -> log
*/
for(let i = 0; i * i < n; i = i * 2)

while(number % divisor == 0) // log
```
