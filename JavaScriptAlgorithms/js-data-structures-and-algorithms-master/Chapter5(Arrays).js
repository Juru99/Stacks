var array1 = [1, 2, 3, 4];

// 삽입
// 시간 복잡도 : O(1)
array1 = [1, 2, 3, 4];
array1.push(5); // array1 = [1,2,3,4,5]
array1.push(7); // array1 = [1,2,3,4,5,7]
array1.push(2); // array1 = [1,2,3,4,5,7,2]
console.log(array1);

// 삭제
// 시간 복잡도 : O(1)
array1 = [1, 2, 3, 4];
array1.pop(); //returns 4, array1 = [1,2,3]
array1.pop(); //returns 3, array1 = [1,2]

// 시간 복잡도 : O(n)
array1 = [1, 2, 3, 4];
array1.shift(); //returns 1, array1 = [2,3,4]
array1.shift(); //returns 2, array1 = [3,4]

// 접근
// 시간 복잡도 : O(1)
array1 = [1, 2, 3, 4];
console.log(array1[0]); //returns 1
console.log(array1[1]); //returns 2

// 반복
// 시간 복잡도 : O(n)
for (var i = 0; i < array1.length; i++) {
  // insert code here
}

// 시간 복잡도 : O(n)
var counter = 0;
while (counter < array1.length) {
  // insert code here
  counter++;
}

// 무한 루프
breakCondition = true;
while (true) {
  if (breakCondition) {
    break;
  }
}

for (;;) {
  if (breakCondition) {
    break;
  }
}

var array1 = ['all', 'cows', 'are', 'big'];
var obj1 = { a: 1, b: 2, c: 3 };
// for in : 객체의 속성 순회
// 시간 복잡도 : O(n)
for (var key in obj1) {
  console.log(key); // a b c
}

for (var key in obj1) {
  console.log(obj1[key]); // 1 2 3
}

// for of : 배열 및 문자열 순회
// 시간 복잡도 : O(n)
for (var element of array1) {
  console.log(element);
}
for (var char of 'study') {
  console.log(char);
}

var array1 = ['all', 'cows', 'are', 'big'];
// forEach문
// 시간 복잡도 : O(n)
array1.forEach(function (element, index) {
  console.log(element);
});

array1.forEach(function (element, index) {
  console.log(array1[index]);
});

// .slice(begin, end) : 배열의 일부를 반환
// 시간 복잡도 : O(n)
var array1 = [1, 2, 3, 4];
var array2 = [1, 2, 3, 4, 5, 6];
array2.slice(3, 10); // returns [4, 5, 6], array2 = [1, 2, 3, 4, 5, 6]

array1.slice(1, 2); //returns [2], array1  = [1,2,3,4]
array1.slice(2, 4); //returns [3,4], array1  = [1,2,3,4]

array1.slice(1); //returns [2,3,4], array1  = [1,2,3,4]
array1.slice(1, 4); //returns [2,3,4], array1  = [1,2,3,4]

array1.slice(); //returns [1,2,3,4], array1 = [1,2,3,4]

// 자바스크립트 배열 참조
var array1 = [1, 2, 3, 4],
  array2 = array1;

console.log(array1); // [1,2,3,4]
console.log(array2); // [1,2,3,4]

array2[0] = 5;

console.log(array1); // [5,2,3,4]
console.log(array2); // [5,2,3,4]

// 배열 복사 (메모리 주소 다름)
var array1 = [1, 2, 3, 4];
var array2 = array1.slice();

console.log(array1); // [1,2,3,4]
console.log(array2); // [1,2,3,4]

array2[0] = 5;

console.log(array1); // [1,2,3,4]
console.log(array2); // [5,2,3,4]

var array1 = [1, 2, 3, 4];
// .splice() : 원본 배열 수정 반환
// 시간 복잡도 : O(n)
array1.splice(); //returns [], array1 = [1,2,3,4]
array1.splice(1, 2); //returns [2,3], array1 = [1,4]

var array1 = [1, 2, 3, 4];
array1.splice(); //returns [], array1 = [1,2,3,4]
array1.splice(1, 2, 5, 6, 7); //returns [2,3],array1 = [1,5,6,7,4]

array1 = [1, 2, 3, 4];
array1.splice(1, 2, [5, 6, 7]); //returns [2,3],  array1 = [1,[5,6,7],4]
array1 = [1, 2, 3, 4];
array1.splice(1, 2, { ss: 1 }); //returns [2,3], array1 = [1,{'ss':1},4]

var array1 = [1, 2, 3, 4];
array1.concat(); //returns [], array1 = [1,2,3,4]
array1.concat([2, 3, 4]); //returns [1,2,3,4,2,3,4],array1 = [1,2,3,4]
array1.concat(2, 3, 4); // returns [1,2,3,4,2,3,4],array1 = [1,2,3,4]

var array1 = [1, 2, 3, 4];
console.log(array1.length); //prints 4
array1.length = 3; // array1 = [1,2,3]

// Spread operator
function addFourNums(a, b, c, d) {
  return a + b + c + d;
}
var numbers = [1, 2, 3, 4];
console.log(addFourNums(...numbers)); // 10

var array1 = [1, 2, 3, 4, 5];
Math.max.apply(null, array1); // 5

var array2 = [3, 2, -123, 2132, 12];
Math.min.apply(null, array2); // -123

function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person = { name: 'John' };
const args = ['Hello'];

greet.apply(person, args); // 출력: "Hello, John"

// 시간 복잡도 : O(n²)
// 공간 복잡도 : O(1)
// 인덱스를 반환한다.
function findSum(arr, weight) {
  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    for (var j = i + 1; j < arrLength; j++) {
      if (arr[i] + arr[j] == weight) {
        return [i, j];
      }
    }
  }
  return -1;
}
findSum([1, 2, 3, 4], 5); // [ 0, 3 ]

var arr = [1, 2, 3, 4, 5];
var weight = 9;

// 시간 복잡도 : O(n)
// 공간 복잡도 : O(n)
// 인덱스를 반환한다.
// 이미 방문한 항목들을 저장하기 위해 자바스크립트 객체를 해시 테이블로 사용한다.
function findSumBetter(arr, weight) {
  var hashtable = {};

  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    var currentElement = arr[i],
      difference = weight - currentElement;

    // check the right one already exists
    if (hashtable[currentElement] != undefined) {
      console.log(`Last i = ${i}`);
      console.log(`Last currentElement = ${currentElement}`);
      return [i, hashtable[currentElement]];
    } else {
      // store index
      hashtable[difference] = i;
      console.log(`i = ${i}`);
      console.log(`currentElement = ${currentElement}`);
      console.log(`difference = ${difference}`);
      console.log(`hashtable[${difference}] = ${hashtable[difference]}`);
    }
  }
  return -1;
}
findSumBetter([1, 2, 3, 4, 5], 9); // [ 4, 3 ]

// .slice() 함수 구현
// 시간 복잡도 : O(n) - 배열의 n개의 항목 모두에 접근
// 공간 복잡도 : O(n) - 배열을 복사할 때 n개의 항목 보관
function arraySlice(array, beginIndex, endIndex) {
  // 전달된 매개변수가 없으면 그냥 배열읇 반환한다.
  if (!beginIndex && !endIndex) {
    return array;
  }

  // 시작 인덱스만 존재하는 경우 endIndex를 배열의 크기로 설정한다.
  if (!endIndex) endIndex = array.length;

  var partArray = [];

  // 시작 인덱스와 끝 인덱스 모두 지정된 경우 배열의 일부를 반환한다.
  for (var i = beginIndex; i < endIndex; i++) {
    partArray.push(array[i]);
  }

  return partArray;
}
arraySlice([1, 2, 3, 4], 1, 2); // [2]
arraySlice([1, 2, 3, 4], 2, 4); // [3,4]

// 배열 내 중앙값 찾기
// 시간 복잡도 : O(1)
// 공간 복잡도 : O(1)
function medianOfArray(array) {
  var length = array.length;
  // 홀수
  if (length % 2 == 1) {
    return array[Math.floor(length / 2)];
  } else {
    // 짝수
    return (array[length / 2] + array[length / 2 - 1]) / 2;
  }
}

// 두 개의 정렬된 배열이 동일한 크기일 때 해당 배열들의 중앙값 찾기
// 두 배열이 동일한 크기라면 전체 크기는 짝수가 된다.
// → 두 개의 짝수를 더하든 두 개의 홀수를 더하든 모두 짝수가 된다.
// pos : 배열의 크기

// 시간 복잡도 : O(log₂(n)) - 배열의 크기를 매번 절반으로 나눔으로써 로그 시간 복잡도를 달성할 수 있다.
function medianOfTwoSortedArray(arr1, arr2, pos) {
  if (pos <= 0) {
    return -1;
  }
  if (pos == 1) {
    return (arr1[0] + arr2[0]) / 2;
  }
  if (pos == 2) {
    return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
  }

  // 배열의 중앙값 찾기
  var median1 = medianOfArray(arr1),
    median2 = medianOfArray(arr2);

  if (median1 == median2) {
    return median1;
  }

  var evenOffset = pos % 2 == 0 ? 1 : 0,
    offsetMinus = Math.floor(pos / 2) - evenOffset,
    offsetPlus = pos - Math.floor(pos / 2) + evenOffset;

  // 함수를 재귀적으로 호출하여 어떤 중앙값이 더 큰지 확인한다.
  if (median1 < median2) {
    return medianOfTwoSortedArray(
      arr1.slice(offsetMinus),
      arr2.slice(0, -offsetMinus),
      offsetPlus
    );
  } else {
    return medianOfTwoSortedArray(
      arr2.slice(offsetMinus),
      arr1.slice(0, -offsetMinus),
      offsetPlus
    );
  }
}

medianOfTwoSortedArray([1, 2, 3], [4, 5, 6], 3); // 3.5
medianOfTwoSortedArray([11, 23, 24], [32, 33, 450], 3); // 28
medianOfTwoSortedArray([1, 2, 3], [2, 3, 5], 3); // 2.5

function commonElements(kArray) {
  var hashmap = {},
    last,
    answer = [];

  for (var i = 0, kArrayLength = kArray.length; i < kArrayLength; i++) {
    var currentArray = kArray[i];
    last = null;
    for (
      var j = 0, currentArrayLen = currentArray.length;
      j < currentArrayLen;
      j++
    ) {
      var currentElement = currentArray[j];
      if (last != currentElement) {
        if (!hashmap[currentElement]) {
          hashmap[currentElement] = 1;
        } else {
          hashmap[currentElement]++;
        }
      }
      last = currentElement;
    }
  }

  // Iterate through hashmap
  for (var prop in hashmap) {
    if (hashmap[prop] == kArray.length) {
      answer.push(parseInt(prop));
    }
  }
  return answer;
}

commonElements([
  [1, 2, 3],
  [1, 2, 3, 4],
  [1, 2],
]); // [ 1, 2 ]

[1, 2, 3, 4, 5, 6, 7].map(function (value) {
  return value * 10;
});
// [10, 20, 30, 40, 50, 60, 70]

[100, 2003, 10, 203, 333, 12].filter(function (value) {
  return value > 100;
});
// [2003, 203, 333]

// Reduce
var sum = [0, 1, 2, 3, 4].reduce(function (prevVal, currentVal, index, array) {
  return prevVal + currentVal;
}, 1);
console.log(sum); // prints 11

function Matrix(rows, columns) {
  var jaggedarray = new Array(rows);
  for (var i = 0; i < columns; i += 1) {
    jaggedarray[i] = new Array(rows);
  }
  return jaggedarray;
}
console.log(Matrix(3, 3));

var matrix3by3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
matrix3by3[0]; // [1,2,3]
matrix3by3[1]; // [4,5,6]
matrix3by3[2]; // [7,8,9]

matrix3by3[0][0]; // 1
matrix3by3[0][1]; // 2
matrix3by3[0][2]; // 3

matrix3by3[1][0]; // 4
matrix3by3[1][1]; // 5
matrix3by3[1][2]; // 6

matrix3by3[2][0]; // 7
matrix3by3[2][1]; // 8
matrix3by3[2][2]; // 9

var M = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
function spiralPrint(M) {
  var topRow = 0,
    leftCol = 0,
    btmRow = M.length - 1,
    rightCol = M[0].length - 1;

  while (topRow < btmRow && leftCol < rightCol) {
    for (var col = 0; col <= rightCol; col++) {
      console.log(M[topRow][col]);
    }
    topRow++;
    for (var row = topRow; row <= btmRow; row++) {
      console.log(M[row][rightCol]);
    }
    rightCol--;
    if (topRow <= btmRow) {
      for (var col = rightCol; col > 0; col--) {
        console.log(M[btmRow][col]);
      }
      btmRow--;
    }
    if (leftCol <= rightCol) {
      for (var row = btmRow; row > topRow; row--) {
        console.log(M[row][leftCol]);
      }
      leftCol++;
    }
  }
}
spiralPrint(M);

function checkRow(rowArr, letter) {
  for (var i = 0; i < 3; i++) {
    if (rowArr[i] != letter) {
      return false;
    }
  }
  return true;
}

function checkColumn(gameBoardMatrix, columnIndex, letter) {
  for (var i = 0; i < 3; i++) {
    if (gameBoardMatrix[i][columnIndex] != letter) {
      return false;
    }
  }
  return true;
}

function ticTacToeWinner(gameBoardMatrix, letter) {
  // Check rows
  var rowWin =
    checkRow(gameBoardMatrix[0], letter) ||
    checkRow(gameBoardMatrix[1], letter) ||
    checkRow(gameBoardMatrix[2], letter);

  var colWin =
    checkColumn(gameBoardMatrix, 0, letter) ||
    checkColumn(gameBoardMatrix, 1, letter) ||
    checkColumn(gameBoardMatrix, 2, letter);

  var diagonalWinLeftToRight =
    gameBoardMatrix[0][0] == letter &&
    gameBoardMatrix[1][1] == letter &&
    gameBoardMatrix[2][2] == letter;
  var diagonalWinRightToLeft =
    gameBoardMatrix[0][2] == letter &&
    gameBoardMatrix[1][1] == letter &&
    gameBoardMatrix[2][0] == letter;

  return rowWin || colWin || diagonalWinLeftToRight || diagonalWinRightToLeft;
}

var board = [
  ['O', '-', 'X'],
  ['-', 'O', '-'],
  ['-', 'X', 'O'],
];
ticTacToeWinner(board, 'X'); // false
ticTacToeWinner(board, 'O'); // true

var board = `%e%%%%%%%%%\n
%...%.%...%\n
%.%.%.%.%%%\n
%.%.......%\n
%.%%%%.%%.%\n
%.%.....%.%\n
%%%%%%%%%x%`;

var rows = board.split('\n');

function generateColumnArr(arr) {
  return arr.split('');
}
var mazeMatrix = rows.map(generateColumnArr);

function findChar(char, mazeMatrix) {
  var row = mazeMatrix.length,
    column = mazeMatrix[0].length;

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < column; j++) {
      if (mazeMatrix[i][j] == char) {
        return [i, j];
      }
    }
  }
}

function printMatrix(matrix) {
  var mazePrintStr = '',
    row = matrix.length,
    column = matrix[0].length;

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < column; j++) {
      mazePrintStr += mazeMatrix[i][j];
    }

    mazePrintStr += '\n';
  }
  console.log(mazePrintStr);
}

function mazePathFinder(mazeMatrix) {
  var row = mazeMatrix.length,
    column = mazeMatrix[0].length,
    startPos = findChar('e', mazeMatrix),
    endPos = findChar('x', mazeMatrix);

  path(startPos[0], startPos[1]);

  function path(x, y) {
    if (x > row - 1 || y > column - 1 || x < 0 || y < 0) {
      return false;
    }
    // Found
    if (x == endPos[0] && y == endPos[1]) {
      return true;
    }
    if (mazeMatrix[x][y] == '%' || mazeMatrix[x][y] == '+') {
      return false;
    }
    // Mark the current spot
    mazeMatrix[x][y] = '+';
    printMatrix(mazeMatrix);

    if (path(x, y - 1) || path(x + 1, y) || path(x, y + 1) || path(x - 1, y)) {
      return true;
    }
    mazeMatrix[x][y] = '.';
    return false;
  }
}

mazePathFinder(mazeMatrix);

var matrix = [
  [1, 0, 1],
  [0, 0, 1],
  [1, 1, 1],
];
rotateMatrix90Left(matrix);

function rotateMatrix90Left(mat) {
  var N = mat.length;

  // Consider all squares one by one
  for (var x = 0; x < N / 2; x++) {
    // Consider elements in group of 4 in
    // current square
    for (var y = x; y < N - x - 1; y++) {
      // store current cell in temp variable
      var temp = mat[x][y];

      // move values from right to top
      mat[x][y] = mat[y][N - 1 - x];

      // move values from bottom to right
      mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y];

      // move values from left to bottom
      mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x];

      // assign temp to left
      mat[N - 1 - y][x] = temp;
    }
  }
}

console.log(matrix); // [[1,1,1],[0,0,1],[1,0,1]]
