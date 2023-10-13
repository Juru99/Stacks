// let nunu = {
//   q: 'consume',
//   w: 'snowball',
// };

// let garen = {
//   q: 'strike',
//   w: 'courage',
// };

// function 챔피언(q, w) {
//   this.q = q;
//   this.w = w;
// }

// let nunu = new 챔피언('consume', 'snowball');
// let garen = new 챔피언('strike', 'courage');

class Hero {
  constructor(q, w) {
    // this : 함수로부터 생성되는 object를 가리킴. 동의어로 instance가 있음.
    this.q = q;
    this.w = w;
  }
}
let nunu = new Hero('consume', 'snowball');
let garen = new Hero('strike', 'courage');

Hero.prototype.job = 'hero';
console.log(nunu.job); // hero

// 동일한 코드
var 배열 = [4, 2, 1];
var 배열 = new Array(4, 2, 1);

// 위 배열은 object이기 때문에 object prototype에 존재하는 sort() 함수를 사용할 수 있다.
배열.sort();
