/*
클로저
- 반환된 내부함수가 자신이 선언되었을때의 환경인 스코프를 기억하며
- 자신이 선언되었을때 환경 밖에서도 스코프에 접근할 수 있는 함수
*/

const { count } = require('node:console');

function outer() {
  let count = 0;

  function inner() {
    count++; // outer함수의 지역변수

    console.log(count);
  }
  return inner;
}

// outer()();

const counter = outer(); // 반환받은 inner()

counter();
counter();
