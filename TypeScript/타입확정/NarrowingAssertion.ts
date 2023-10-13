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
