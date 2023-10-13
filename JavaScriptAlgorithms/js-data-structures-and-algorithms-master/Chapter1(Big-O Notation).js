// Common Examples
// 시간 복잡도 : O(n)
function exampleLinear(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}

// 시간 복잡도 : O(n^2)
function exampleQuadratic(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    for (var j = i; j < n; j++) {
      console.log(j);
    }
  }
}

// 시간 복잡도 : O(n^3)
function exampleCubic(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    for (var j = i; j < n; j++) {
      console.log(j);
      for (var k = j; k < n; k++) {
        console.log(k);
      }
    }
  }
}

// 시간 복잡도 : O(log n)
function exampleLogarithmic(n) {
  for (var i = 1; i < n; i = i * 2) {
    console.log(i);
  }
}
// exampleLinear(3);
// exampleQuadratic(3);
// exampleCubic(3);
exampleLogarithmic(100);

//------------------ Coefficient Rule
// 시간 복잡도 : O(n)
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1;
  }
  return count;
}

// f(n) = 5n
// 시간 복잡도 : O(n)
function a(n) {
  var count = 0;
  for (var i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}

// f(n) = n + 1
// 시간 복잡도 : O(n)
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1;
  }
  count += 3;
  return count;
}

//------------------ Add Big-Os Up
// f(n) = n + 5n = 6n
// 시간 복잡도 : O(n)
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1;
  }
  for (var i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}

//------------------ Multiply Big-Os
// f(n) = n * 5n = 5n^2
// 시간 복잡도 : O(n^2)
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1;
    for (var i = 0; i < 5 * n; i++) {
      count += 1;
    }
  }
  return count;
}

//-------------------- Polynomial Rule
// f(n) = n^2
// 시간 복잡도 : O(n^2)
function a(n) {
  var count = 0;
  for (var i = 0; i < n * n; i++) {
    count += 1;
  }
  return count;
}

// ---- Exercises
// f(n) = 1000n * 20n = 20000n^2
// 시간 복잡도 : O(n^2)
function someFunction(n) {
  for (var i = 0; i < n * 1000; i++) {
    for (var j = 0; j < n * 20; j++) {
      console.log(i + j);
    }
  }
}
('answer: O(n^2)');

// f(n) = n * n * n * 10 = 10n^3
// 시간 복잡도 : O(n^3)
function someFunction(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      for (var k = 0; k < n; k++) {
        for (var l = 0; l < 10; l++) {
          console.log(i + j + k + l);
        }
      }
    }
  }
}
('answer: O(n^3)');

// f(n) = 1000
// 시간 복잡도 : O(1)
function someFunction(n) {
  for (var i = 0; i < 1000; i++) {
    console.log('hi');
  }
}
('answer: O(1)');

// f(n) = 10n
// 시간 복잡도 : O(n)
function someFunction(n) {
  for (var i = 0; i < n * 10; i++) {
    console.log(n);
  }
}
('answer: O(n)');

// 시간 복잡도 : O(log₂n)
function someFunction(n) {
  for (var i = 0; i < n; i * 2) {
    console.log(n);
  }
}
('answer: O(log_2n)');

// 시간 복잡도 : O(∞)
function someFunction(n) {
  while (true) {
    console.log(n);
  }
}
('answer: O(∞)');
