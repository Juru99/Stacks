// 자바스크립트 메모리 관리
// 객체에 대한 참조: 함수가 객체의 일부값에만 접근해도 해당 객체 전체가 함수에 로딩되어 메모리를 사용한다.
function memory() {
  return '';
}
var foo = {
  bar1: memory(), // 5kb
  bar2: memory(), // 5kb
};

function clickEvent() {
  alert(foo.bar1[0]); // 10kb 사용
}
//-----------------------------------------------

// DOM 메모리 누수: DOM 객체들은 삭제된 이후 참조돼서는 안된다.
var one = document.getElementById('one');
var two = document.getElementById('two');
one.addEventListener('click', function () {
  two.remove();
  console.log(two); // 삭제 이후에도 html을 출력할 것이다.
});

// DOM 메모리 누수 방지1
var one = document.getElementById('one');
one.addEventListener('click', function () {
  var two = document.getElementById('two');
  two.remove();
});

// DOM 메모리 누수 방지2: 클릭 핸들러 사용 후 삭제
var one = document.getElementById('one');
one.addEventListener('click', function () {
  var two = document.getElementById('two');
  two.remove();
});
one.removeEventListener('click');
//-----------------------------------------------

// window 전역 객체: 가능하면 사용 X
var a = 'apples'; //global with var
b = 'oranges'; //global without var

console.log(window.a); // prints "apples"
console.log(window.b); // prints "oranges"
//-----------------------------------------------

// 객체 참조 제한하기: 함수에 전체 객체가 아닌 필요한 속성만 전달한다.
// bad
var test = {
  prop1: 'test',
};

function printProp1(test) {
  console.log(test.prop1);
}

printProp1(test); //'test'

// good
var test = {
  prop1: 'test',
};

function printProp1(prop1) {
  console.log(prop1);
}

printProp1(test.prop1); //'test'
//-----------------------------------------------

// delete 연산자: 원치 않는 객체 속성을 제거한다.
var test = {
  prop1: 'test',
};
console.log(test.prop1); // 'test'
delete test.prop1;
console.log(test.prop1); // _undefined_
//-----------------------------------------------

// Exercises

function someLargeArray() {
  return new Array(1000000);
}

var exampleObject = {
  prop1: someLargeArray(),
  prop2: someLargeArray(),
};

function printProperty(obj) {
  console.log(obj['prop1']);
}
printProperty(exampleObject);

// --
function someLargeArray() {
  return new Array(1000000);
}

var exampleObject = {
  prop1: someLargeArray(),
  prop2: someLargeArray(),
};

function printProperty(prop) {
  console.log(prop);
}
printProperty(exampleObject['prop1']);

// -- Question 2
var RED = 0,
  GREEN = 1,
  BLUE = 2;
function redGreenBlueCount(arr) {
  var counter = new Array(3).fill(0);
  for (var i = 0; i < arr.length; i++) {
    var curr = arr[i];
    if (curr == RED) {
      counter[RED]++;
    } else if (curr == GREEN) {
      counter[GREEN]++;
    } else if (curr == BLUE) {
      counter[BLUE]++;
    }
  }
  return counter;
}

function redGreenBlueCount(arr) {
  var RED = 0,
    GREEN = 1,
    BLUE = 2,
    counter = new Array(3).fill(0);
  for (var i = 0; i < arr.length; i++) {
    var curr = arr[i];
    if (curr == RED) {
      counter[RED]++;
    } else if (curr == GREEN) {
      counter[GREEN]++;
    } else if (curr == BLUE) {
      counter[BLUE]++;
    }
  }
  return counter;
}

//

//<button id="one">Button 1</button>
//<button id="two">Button 2</button>

// Question:
var one = document.querySelector('#one');
getElementById('one');
var two = document.querySelector('#two');
getElementById('two');
function callBackExample() {
  one.removeEventListener('', callBackExample);
}
one.addEventListener('click', function () {
  two.remove();
  console.log(two); // will print the html even after deletion
});
two.addEventListener('click', function () {
  one.remove();
  console.log(one); // will print the html even after deletion
});

// answer:
var one = document.querySelector('#one');
var two = document.querySelector('#two');

function callbackOne() {
  var two = document.querySelector('#two');
  if (!two) return;
  two.remove();
  one.removeEventListener('hover', callbackOne);
}

function callbackTwo() {
  var one = document.querySelector('#one');
  if (!one) return;
  one.remove();
  two.removeEventListener('hover', callbackTwo);
}
one.addEventListener('click', callbackOne);
two.addEventListener('click', callbackTwo);
