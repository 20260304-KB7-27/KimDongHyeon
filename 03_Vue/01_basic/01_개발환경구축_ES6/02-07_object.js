// 객체 구조분해 할당
const user = {
  name: 'alice',
  age: 25,
  job: 'Developer',
  info: {
    address: 'Seoul',
    hobbies: ['redding', 'coding'],
  },
};

// 객체 속성명을 다르게 사용하고 싶다면 별칭을 지정할 수 있음
// const { age: ageNo, name: userName } = user;

// console.log(aggeNo);
// console.log(userName);

// 중첨된 객체 구조분해
const {
  name,
  age,
  info: {
    address,
    hobbies: [first, second],
  },
} = user;

console.log(address);
console.log(first); // reading
console.log(second); // coding
