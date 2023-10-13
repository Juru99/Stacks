// 문자열 접근
'dog'.charAt(1); // 'o'

'Youtube'.substring(1, 2); // 'o'
'Youtube'.substring(3, 7); // 'tube'

'Youtube'.substring(1); // returns 'outube'

// 문자열 비교
var a = 'a';
var b = 'b';
console.log(a < b); // prints 'true'

var a = 'add';
var b = 'b';

console.log(a < b); // prints 'true'

var a = 'add';
var b = 'ab';
console.log(a < b); // prints 'false'

console.log('add' < 'ab' == 'ad' < 'ab'); // prints 'true'

// 문자열 검색
'Red Dragon'.indexOf('Red'); // returns  0
'Red Dragon'.indexOf('RedScale'); // returns -1
'Red Dragon'.indexOf('Dragon', 0); // returns  4
'Red Dragon'.indexOf('Dragon', 4); // returns  4
'Red Dragon'.indexOf('', 9); // returns  9

'Red Dragon'.startsWith('Red'); // returns true
'Red Dragon'.endsWith('Dragon'); // returns true
'Red Dragon'.startsWith('Dragon'); // returns false
'Red Dragon'.endsWith('Red'); // returns false

// 어떤 문자열 내에 특정 문자열이 존재하는지 확인
function existsInString(stringValue, search) {
  return stringValue.indexOf(search) !== -1;
}
console.log(existsInString('red', 'r')); // prints 'true';
console.log(existsInString('red', 'b')); // prints 'false';

var str = "He's my king from this day until his last day",
  count = 0,
  pos = str.indexOf('a');

while (pos !== -1) {
  console.log(pos); // pos = 24 38 43
  count++;
  pos = str.indexOf('a', pos + 1);
}
console.log(count); // prints '3'

// 4. 문자열 분해
var test1 = 'chicken,noodle,soup,broth';
test1.split(','); // ["chicken", "noodle", "soup", "broth"]

var test1 = 'chicken';
test1.split(''); // ["c", "h", "i", "c", "k", "e", "n"]

// 5. 문자열 바꾸기
'Wizard of Oz'.replace('Wizard', 'Witch'); // "Witch of Oz"

'Wizard of Wizard'.replace('Wizard', 'Witch'); // "Witch of Wizard"

String.prototype.replaceAll = function (findString, replaceString) {
  return this.split(findString).join(replaceString);
};

'This is a test string.'.replaceAll(' ', ','); // 'This,is,a,test,string.'

var str = 'JavaScript DataStructures';
var n = str.search(/DataStructures/);
console.log(n); // prints '11'

var n2 = str.match('java');
console.log(`n2 : ${n2}`);

let bbb = /Java S/;
var ccc = bbb.exec('a b Java Script JavaScript'); // ['Java S', index: 4, input: 'a b Java Script JavaScript', groups: undefined]
ccc[0]; // Java S
ccc.index; // 4

var reg = /\d+/;
reg.test('123'); // true
reg.test('33asd'); // true
reg.test('5asdasd'); // true
reg.test('asdasd'); // false

var reg = /^\d+$/;
reg.test('123'); // true
reg.test('123a'); // false
reg.test('11a22'); // false

var reg = /^[0-9]*.[0-9]*[1-9]+$/;
reg.test('12'); // true
reg.test('12.2'); // true
reg.test('12.2.3'); // false

var reg = /[a-zA-Z0-9]/;
reg.test('somethingELSE'); // true
reg.test('hello'); // true
reg.test('112a'); // true
reg.test('112'); // true
reg.test('^'); // false

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

console.log(btoa('hello I love learning to computer program'));
// alternatively:
// Buffer.from('hello I love learning to computer program').toString('base64');

console.log(atob('aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0'));
// Buffer.from(
//   'aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0',
//   'base64'
// ).toString();

// URL 압축 알고리즘
// 26개의 소문자, 26개의 대문자, 10개의 숫자(0부터 9)로 구성
var DICTIONARY =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

function encodeId(num) {
  var base = DICTIONARY.length;
  var encoded = '';

  if (num === 0) {
    return DICTIONARY[0];
  }

  while (num > 0) {
    encoded += DICTIONARY[num % base];
    num = Math.floor(num / base);
  }

  return reverseWord(encoded);
}

function reverseWord(str) {
  var reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

function decodeId(id) {
  var base = DICTIONARY.length;
  var decoded = 0;

  for (var index = 0; index < id.split('').length; index++) {
    decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index));
  }

  return decoded;
}

console.log(encodeId(11231230)); // prints 'VhU2'
console.log(decodeId('VhU2')); // prints '11231230'

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
RSAKeyPair(5, 11); //Public key:  [3,55], Private key: [27,55]

function reverseString(str) {
  var reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}
reverseString('sammie'); // 'eimmas'

function indexOf(str, subStr, startIndex) {
  var idx = 0,
    counter = 0;

  // if the optional startIndex was passed, set it to that.
  var i = startIndex | 0;

  for (; i < str.length; i++) {
    if (str[i] == subStr[counter]) {
      counter++;
    } else {
      counter = 0;
    }

    // Check starting point or a match
    if (counter == 0) {
      idx = i + 1;
    } else if (counter == subStr.length) {
      return idx;
    }
  }

  // Nothing found
  return -1;
}

console.log(indexOf('hello', 'll')); // prints '2'
console.log(indexOf('hello', 'h')); // prints '0'
console.log(indexOf('hello', 'll', 3)); // prints '-1'

function reverseWords(str) {
  // Words are seperated by space
  var words = str.split(' '); // creates array of words
  var reversedSetence = '';

  for (var i = 0; i < words.length; i++) {
    // only put the extra space if not the last word
    var spaceForWord = i === words.length - 1 ? '' : ' ';

    reversedSetence += reverseString(words[i]) + spaceForWord;
  }

  return reversedSetence;
}

function reverseString(str) {
  var reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

reverseWords('hello how are you doing');

function reverseWords(str) {
  var temp = '',
    reversedSetence = '';

  for (var i = 0; i < str.length; i++) {
    // only put the extra space if not the last word
    var spaceForWord = i === str.length - 1 ? '' : ' ';

    // if space is encountered
    if (str.charAt(i) === ' ') {
      // reverse and concat
      reversedSetence += reverseString(temp) + spaceForWord;
      // reset the temp
      temp = '';
    } else {
      temp += str.charAt(i);
    }

    // reached the end of the input
    if (i === str.length - 1) {
      reversedSetence += reverseString(temp);
    }
  }

  return reversedSetence;
}

function reverseString(str) {
  var reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

reverseWords('hello how are you doing');

function removeExtraSpaces(str) {
  var newString = '',
    lastChar = ' ';

  for (var i = 0, strLength = str.length; i < strLength; i++) {
    var currentChar = str.charAt(i),
      currentAndLastIsSpace = lastChar == ' ' && currentChar == ' ',
      nextCharIsSpace =
        i < strLength - 1 && str.charAt(i + 1) == ' ' && currentChar == ' ';

    if (!(currentAndLastIsSpace || nextCharIsSpace)) {
      newString += currentChar;
    }

    lastChar = currentChar;
  }

  return newString;
}

removeExtraSpaces(' hello.   how are you doing?     ');
// "hello.how are you doing?"
