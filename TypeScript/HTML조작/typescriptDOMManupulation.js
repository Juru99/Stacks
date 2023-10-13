"use strict";
// let 제목 = document.querySelector('#title');
// if (제목 != null) 제목.innerHTML = '반갑소';
let 제목 = document.querySelector('#title');
if (제목 instanceof HTMLHeadingElement)
    제목.innerHTML = '반갑소';
// let 제목 = document.querySelector('#title') as HTMLElement;
// 제목.innerHTML = '반갑소';
// let 제목 = document.querySelector('#title');
// if (제목?.innerHTML != undefined) 제목.innerHTML = '반갑소';
// let 제목 = document.querySelector('#title');
// console.log(제목?.innerHTML ?? '제목을 못가져왔어요');
let 링크 = document.querySelector('#link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com'; //잘됨
}
let 버튼 = document.getElementById('button');
if (버튼 instanceof HTMLButtonElement) {
    버튼.addEventListener('click', function () {
        console.log('안녕');
    });
}
// let 버튼 = document.getElementById('button');
// 버튼?.addEventListener('click', function () {
//   console.log('안녕');
// });
let 이미지 = document.getElementById('image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'new.jpg';
}
let 링크들 = document.querySelectorAll('.naver');
링크들.forEach(링크 => {
    if (링크 instanceof HTMLAnchorElement)
        링크.href = 'https://kakao.com';
});
