// 거품 정렬: 최악의 정렬. 모든 가능한 짝을 비교
// 시간 복잡도: O(n^2)
// 공간 복잡도: O(1)
function bubbleSort(array) {
  for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
    for (var j = 0; j <= i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}

// 정렬에 사용되는 일반적인 함수로, 두 배열의 항목 값을 교환한다.
function swap(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

bubbleSort([6, 1, 2, 3, 4, 5]); // [1,2,3,4,5,6]

// 선택 정렬: 거품 정렬보다 약간 나은 정도.
// 시간 복잡도: O(n^2)
// 공간 복잡도: O(1)
function selectionSort(items) {
  var len = items.length,
    min;

  for (var i = 0; i < len; i++) {
    // 최소 항목을 현재 위치로 설정한다.
    min = i;
    // 더 작은 항목이 있는지 배열의 나머지를 확인한다.
    for (j = i + 1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }
    // 현재 위치가 최소 항목 위치가 아니라면 항목들을 교환한다.
    if (i != min) {
      swap(items, i, min);
    }
  }

  return items;
}
selectionSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]

// 삽입 정렬: 선택 정렬과 비슷하다.
// 시간 복잡도: O(n^2)
// 공간 복잡도: O(1)
function insertionSort(items) {
  var len = items.length, // 배열의 항목 수
    value, // 현재 비교 중인 값
    i, // 정렬되지 않은 부분의 인덱스
    j; // 정렬된 부분의 인덱스

  for (i = 0; i < len; i++) {
    // 현재 값이 이후에 이동될 수 있기 때문에 저장한다.
    value = items[i];

    // 정렬된 부분의 값이 정렬되지 않은 부분의 값보다 큰 경우
    // 정렬된 부분의 모든 항목을 하나씩 이동시킨다.
    // 이는 값을 삽입한 공간을 만든다.

    for (j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }
    items[j + 1] = value;
  }
  return items;
}
insertionSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]

// 빠른 정렬
// 시간 복잡도: 평균 O(nlog2(n)), 최악의 경우(잘못된 기준점 선택시) O(n^2)
// 공간 복잡도: O(log2(n))
function quickSort(items) {
  return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right);

    if (left < index - 1) {
      quickSortHelper(items, left, index - 1);
    }

    if (index < right) {
      quickSortHelper(items, index, right);
    }
  }
  return items;
}

function partition(array, left, right) {
  var pivot = array[Math.floor((right + left) / 2)];
  while (left <= right) {
    while (pivot > array[left]) {
      left++;
    }
    while (pivot < array[right]) {
      right--;
    }
    if (left <= right) {
      var temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}

quickSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]

// 빠른 선택
// 시간복잡도: O(n)
var array = [1, 3, 3, -2, 3, 14, 7, 8, 1, 2, 2];
// 정렬된 상태: [-2, 1, 1, 2, 2, 3, 3, 3, 7, 8, 14]

function quickSelectInPlace(A, l, h, k) {
  var p = partition(A, l, h);
  if (p == k - 1) {
    return A[p];
  } else if (p > k - 1) {
    return quickSelectInPlace(A, l, p - 1, k);
  } else {
    return quickSelectInPlace(A, p + 1, h, k);
  }
}

function medianQuickselect(array) {
  return quickSelectInPlace(
    array,
    0,
    array.length - 1,
    Math.floor(array.length / 2),
  );
}

quickSelectInPlace(array, 0, array.length - 1, 5); // 2
// 2 - 5번째로 가장 작은 항목이기 때문이다.
quickSelectInPlace(array, 0, array.length - 1, 10); // 7
// 7 - 10번째로 가장 작은 항목이기 때문이다.

// 병합 정렬
// 시간 복잡도: O(nlog2(n))
// 공간 복잡도: O(n)
function merge(leftA, rightA) {
  var results = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      results.push(leftA[leftIndex++]);
    } else {
      results.push(rightA[rightIndex++]);
    }
  }
  var leftRemains = leftA.slice(leftIndex),
    rightRemains = rightA.slice(rightIndex);

  // 남은 항목들을 결과 배열에 추가한다.
  return results.concat(leftRemains).concat(rightRemains);
}

function mergeSort(array) {
  if (array.length < 2) {
    return array; // 기저 조건: 항목이 하나뿐이라서 해당 배열은 이미 정렬된 것이다.
  }

  var midpoint = Math.floor(array.length / 2),
    leftArray = array.slice(0, midpoint),
    rightArray = array.slice(midpoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
mergeSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]

// 계수 정렬
// 시간 복잡도: O(k+n)
// 공간 복잡도: O(k)
function countSort(array) {
  var hash = {},
    countArr = [];
  for (var i = 0; i < array.length; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = 1;
    } else {
      hash[array[i]]++;
    }
  }

  for (var key in hash) {
    // 항목이 몇 개가 되든 해당 항목을 배열에 추가한다.
    for (var i = 0; i < hash[key]; i++) {
      countArr.push(parseInt(key));
    }
  }

  return countArr;
}
countSort([6, 1, 23, 2, 3, 2, 1, 2, 2, 3, 3, 1, 123, 123, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]

// 자바스크립트 내장 정렬
var array1 = [12, 3, 4, 2, 1, 34, 23];
array1.sort(); // array1: [1, 12, 2, 23, 3, 34, 4]

var array1 = [12, 3, 4, 2, 1, 34, 23];

// 자바스크립트 내장 정렬: 숫자 정렬(오름차순)
function comparatorNumber(a, b) {
  return a - b;
}

array1.sort(comparatorNumber); // [1, 2, 3, 4, 12, 23, 34]

var array1 = [12, 3, 4, 2, 1, 34, 23];

// 자바스크립트 내장 정렬: 숫자 정렬(내림차순)
function comparatorNumber(a, b) {
  return b - a;
}

array1.sort(comparatorNumber); // [34, 23, 12, 4, 3, 2, 1]

// 문자열을 길이순으로 정렬하는 자바스크립트 정렬 비교 함수 생성하기
// length 속성을 비교해서 정렬하기
var mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned stark'];

function sortComparator(a, b) {
  return a.length - b.length;
}
mythical.sort(sortComparator);

// a의 위치에 따라 문자열 항목들을 정렬하기
var mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned tark'];

function sortComparator(a, b) {
  return a.indexOf('a') - b.indexOf('a');
}

mythical.sort(sortComparator);

// 속성의 개수에 따라 객체 항목들을 정렬하기
var mythical = [
  { prop1: '', prop2: '' },
  { prop1: '', prop2: '', prop3: '' },
  { prop1: '', prop2: '' },
];

function sortComparator(a, b) {
  return Object.keys(a).length - Object.keys(b).length;
}

mythical.sort(sortComparator); // [{prop1:'', prop2:''},{prop1:'', prop2:''},{prop1:'', prop2:'', prop3:''}]

// 단어 세기 목록 구현하기
// 시간 복잡도: O(nlog2(n))
// 공간 복잡도: O(n)
function wordCount(sentence) {
  // 마침표가 단어로 인식되지 않도록 마침표를 제거한다.
  var wordsArray = sentence.replace(/[.]/g, '').split(' '),
    occurenceList = {},
    answerList = {};

  for (var i = 0, wordsLength = wordsArray.length; i < wordsLength; i++) {
    var currentWord = wordsArray[i];
    if (!occurenceList[currentWord]) {
      // 존재하지 않는다. 따라서 첫 번째 등장으로 설정한다.
      occurenceList[currentWord] = 1;
    } else {
      occurenceList[currentWord]++; // 등장 횟수를 증가한다.
    }
  }

  var arrayTemp = [];
  // 값과 키를 고정 배열로 저장한다.
  for (var prop in occurenceList) {
    arrayTemp.push([occurenceList[prop], prop]);
  }

  function sortcomp(a, b) {
    return b[0] - a[0]; // 배열의 첫 번째 항목을 비교한다.
  }

  arrayTemp.sort(sortcomp); // 정렬

  for (var i = 0, arrlength = arrayTemp.length; i < arrlength; i++) {
    var current = arrayTemp[i];
    answerList[current[1]] = current[0]; // 키-값 쌍
  }
  return answerList;
}
wordCount('practice makes perfect. get perfect by practice. just practice');
