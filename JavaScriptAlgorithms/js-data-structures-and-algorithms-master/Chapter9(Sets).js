// 집합 연산: 삽입
// .add()
// 시간 복잡도: O(1)
var exampleSet = new Set();
exampleSet.add(1); // exampleSet: Set(1) {1}
exampleSet.add(1); // exampleSet: Set(1) {1}
exampleSet.add(2); // exampleSet: Set(2) {1, 2}
exampleSet;

// 집합 연산: 삭제
// .delete(): boolean 반환. 삭제되면 true, 존재하지 않으면 false
// 시간 복잡도: O(1)
var exampleSet = new Set();
exampleSet.add(1); // exampleSet: Set {1}
exampleSet.delete(1); // true
exampleSet.add(2); // exampleSet: Set {1, 2}

// 집합 연산: 포함
// .has(): boolean 반환. 있으면 true, 없으면 false
// 시간 복잡도: O(1)
var exampleSet = new Set();
exampleSet.add(1); // exampleSet: Set(1) {1}
exampleSet.has(1); // true
exampleSet.has(2); // false
exampleSet.add(2); // exampleSet: Set(2) {1, 2}
exampleSet.has(2); // true

// 교집합
function intersectSets(setA, setB) {
  var intersection = new Set();
  for (var elem of setB) {
    if (setA.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
}
var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]);
intersectSets(setA, setB); // Set {2, 3}

// 상위 집합 여부 확인
function isSuperset(setA, subset) {
  for (var elem of subset) {
    if (!setA.has(elem)) {
      return false;
    }
  }
  return true;
}

var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([5]);
isSuperset(setA, setB); // true
// setA가 setB의 모든 항목을 포함하기 때문에

setA.isSuperset(setC); // false
// setA가 setC의 항목 5를 포함하지 않기 때문에

// 합집합
function unionSet(setA, setB) {
  var union = new Set(setA);
  for (var elem of setB) {
    union.add(elem);
  }
  return union;
}
var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([5]);
unionSet(setA, setB); // Set {1, 2, 3, 4}

unionSet(setA, setC); // Set {1, 2, 3, 4, 5}

// 차집합
function differenceSet(setA, setB) {
  var difference = new Set(setA);
  for (var elem of setB) {
    difference.delete(elem);
  }
  return difference;
}
var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]);
differenceSet(setA, setB); // Set {1, 4}

// Exercises
// Question 1: 집합을 사용해 배열의 중복 항목 확인하기
function checkDuplicates(arr) {
  var mySet = new Set(arr);
  return mySet.size < arr.length;
}
checkDuplicates([1, 2, 3, 4, 5]); // false
checkDuplicates([1, 1, 2, 3, 4, 5]); // true

// Question 2: 개별적인 배열들로부터 유일한 값만을 반환하기
function uniqueList(arr1, arr2) {
  var mySet = new Set(arr1.concat(arr2));
  return Array.from(mySet);
}
uniqueList([1, 1, 2, 2], [2, 3, 4, 5]); // [1,2,3,4,5]
uniqueList([1, 2], [3, 4, 5]); // [1,2,3,4,5]
uniqueList([], [2, 2, 3, 4, 5]); // [2,3,4,5]
