/*
  ES6 (2015)
  새로운 문법이 많이 등장한 버전

  1 let, const
  2 메서드
  3 화살표 함수
  4 구조분해 할당
  5 스프레드 연산자
  6 프로미스
*/


/*
  let과 const

  1 let
  2 const
  3 블록 범위
*/


// let
// var과 사용법이 비슷하다

// let foo = "bar";

// console.log(foo);

// let foo = "bar";
// let foo = "baz"; // 재선언 불가


// const (constant, 상수)

// 다음의 형태로만 사용할 수 있다
// const foo = "bar";


// 블록 범위

// { // 블록
//   var varInBlock = true;
//   let letInBlock = true;
//   const constInBlock = true;
// }

// 블록 밖에서 접근 가능
// console.log(varInBlock) // true

// 블록 밖에서 접근 불가
// console.log(letInBlock)

// 블록밖에서 접근 불가
// console.log(constInBlock);


/*
  ES6 메서드

  1 Array.map()
  2 Object.keys()
*/


// Array.map(callback)
// 배열에 특정한 작업을 수행한다. 업데이트된 배열을 리턴한다


// let arr = [1, 2, 3];

// // 배열에 각아이템에 10을 곱해야 한다


// let updatedArr = arr.map(function (item) {
//   // item: 배열의 각 아이템
//   return item * 10;
// })

// console.log(updatedArr); // 10, 20, 30


// Object.keys(객체)
// 객체의 속성을 문자열 배열로 리턴한다

// let cat = {
//   name: "치즈",
//   home: null,
//   sound: function () {
//     return "야옹"
//   }
// }

// let keys = Object.keys(cat);

// console.log(keys); // name, home, sound



// map 메서드를 사용하여 각 맥주의 이름을
// 전체대문자 형태로 바꾸어보세요

// let beers = ["Guinness", "Heineken", "Budwiser"]


// // 파라미터 이름은 바꿀 수 있다
// let updatedBeers = beers.map(function (beer) {
//   return beer.toUpperCase();
// })

// console.log(updatedBeers);


/*
  화살표 함수
*/

// function 예약어 대신 화살표를 사용한다
// let f = () => {
//   return "foo"
// }

// console.log(f());

// 중괄호와 return을 생략하면 바로 리턴한다
// let f = () => "foo"

// console.log(f());


/*
  구조분해할당 (Destructing)

  1 배열 구조분해할당
  2 객체 구조분해할당
  3 매개변수 구조분해할당
*/


// 1 배열구조분해할당
// 배열의 각아이템을 변수에 간단하게 할당할 수 있다

// var beers = ['Guinness', 'Heineken', 'Budwiser'];

// 기존의 방법
// 변수를 여러번 선언해야 한다 OTL
// var irishBeer = beers[0]
// var dutchBeer = beers[1]
// var americanBeer = beers[3]

// 구조분해할당
// var [ irishBeer, dutchBeer, americanBeer ] = beers;


// 객체 구조분해할당
// 객체의 각 속성을 변수에 간단하게 할당할 수 있다

// var irishBeer = { 
//   name: 'Guinness', 
//   origin: 'Ireland', 
//   available: false 
// }

// 기존의 방법
// 변수를 여러번 선언해야 한다 OTL
// var name = irishBeer.name;
// var origin = irishBeer.origin;
// var available = irishBeer.available;


// 구조분해할당 이용
// var { name, origin, available } = irishBeer;


// 매개변수 구조분해할당
// 객체의 속성을 매개변수에 간단한 방법으로 할당할 수 있다

// var irishBeer = { 
//   name: 'Guinness', 
//   origin: 'Ireland', 
//   available: false 
// };

// // 기존의 방법
// // function f(irishBeer) {
// //   // 변수 선언을 여러번 해야한다
// //   var name = irishBeer.name;
// //   var origin = irishBeer.origin;
// //   var available = irishBeer.available;
// // }


// // 구조분해할당 이용
// function f({ name, origin, available }) {
//   // 객체 매개변수의 속성에 바로 접근 가능

//   console.log(name, origin, available); // Guinness Ireland false
// }

// f(irishBeer);


// 구조분해할당 문법을 사용하여 각 맥주를 변수에 할당해보세요
// var asianBeers = ["클라우드", "아사히"];

// var [koreanBeer, japaneseBeer] = asianBeers;

// console.log(koreanBeer)
// console.log(japaneseBeer)

/*
  스프레드 연산자

  1 배열과 스프레드연산자
  2 객체와 스프레드 연산자
*/


/*
  배열과 스프레드연산자
  배열의 아이템을 간단하게 복사할 수 있다

  ...복사할 배열
*/


// var beers = ['Guinness', 'Heineken'];
// var newBeer = "Budwiser"

// // 새로운 아이템 추가
// var updatedBeers = [...beers, newBeer];

// console.log(updatedBeers) // Guinness, Heineken, Budwiser


// var europeanBeers = ['Guinness', 'Heineken'];
// var asianBeers = ['Asahi', 'Kloud']

// var worldBeers = [...europeanBeers, ...asianBeers];

// console.log(worldBeers); // Guinness, Heineken, Asahi, Kloud


/*
  객체와 스프레드 연산자

  객체의 속성을 간단하게 복사할 수 있다
  ...복사할 객체
*/

// var irishBeer = { 
//   name: 'Guinness', 
//   origin: 'Ireland', 
//   available: false // 품절
// };

// // 재입고
// var updatedIrishBeer = { ...irishBeer, available: true };

// console.log(updatedIrishBeer);


// 치즈가 삼산동으로 입양되었습니다
// home 속성을 스프레드 연산자를 활용해서 업데이트해보세요
// var cat = {
//   name: "치즈",
//   age: 2,
//   home: null,
//   sound: function () {
//     return "야옹"
//   }
// }

// var updatedCat = { ...cat, home: "삼산동", color: "베이지" };

// console.log(updatedCat);


/*
  프로미스 (Promise)
  비동기 작업의 성공/실패 여부와 그 결과값을 나타낸다
  비동기 작업의 가독성을 향상시키기 위해 사용된다

  1 프로미스의 구조
  2 실제 사용 예시
  3 async / await 
*/


/*
   프로미스의 구조

   1 프로미스 객체 생성
   두개의 매개변수(콜백)을 가진 콜백을 생성자함수에 전달한다

   - 첫번째 매개변수(resolve): 작업이 성공했을 경우 호출된다
   - 두번째 매개변수(rejected): 작업이 실패했을 경우 호출된다

   2 프로미스의 상태
   - fullfilled: 비동기 작업의 성공
   - rejected: 비동기 작업의 실패
   - pending: 대기 상태

   3 프로미스 메서드
   - Promise.then(): 성공 시 데이터를 다룬다
   - Promise.catch(): 실패 시 에러를 처리한다
   - Promise.finally(): 최종 작업을 처리한다(성공/실패 여부와 관계없이)
*/


// Promise 객체 생성
// const promise = new Promise((res, rej) => {
//   // 비동기 작업의 성공
//   // res: resolve, rej: rejected
//   res({ foo: "bar" });

//   // 프로미스의 상태: fullfilled(이행)
// })

// promise
//   .then((value) => { // 데이터 처리
//     console.log(value) // foo: "bar" (결과)
//   })
//   .catch((error) => { // 에러 처리
//     console.error(error)
//   })


// 프로미스의 실제 사용 예시
// 서버에 데이터 요청 등


// 서버에 데이터를 요청하는 함수
// 결과로 프로미스 객체를 리턴한다
// function fetchData() {
//   const promise = new Promise((res, rej) => {
//     res({ foo: 'bar' });
//   })

//   return promise;
// }


// fetchData()
//   .then(data => { 
//     console.log('서버로부터 전송받은 데이터:', data);
//   })
//   .catch(error => {
//     console.error(error)
//   })


/*
  async / await
  프로미스 객체가 결과를 리턴할 때까지 기다린다
  프로미스 작업의 가독성을 향상시키기 위해 사용된다
  catch 블록에서 에러를 처리한다
*/

// 서버에 데이터를 요청하는 함수
// function fetchData() {
//   const promise = new Promise((res, rej) => {
//     res({ foo: 'bar' })
//   })

//   return promise;
// }

// async function f() {
//   try {

//     const data = await fetchData(); // 프로미스 객체가 결과를 리턴할 때
//     // 까지 기다린다

//     console.log("서버로부터 전송받은 데이터:", data); // 데이터에 접근

//   } catch (err) { // 에러 처리
//     console.error(err)
//   }
// }

// f();