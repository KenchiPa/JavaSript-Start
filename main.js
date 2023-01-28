



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 콜백(Callback)
// 함수의 인수로 사용되는 함수
// 실행 위치를 보장하는 용도로 사용을 하기도 한다.

// setTimeout(함수, 시간)

// function timeout(){
//     setTimeout(() => {
//         console.log('KENCHI1')
//     }, 3000)
// }

// timeout()
// console.log('Done1')
// // Done KENCHI

// function timeout2(callBack){
//     setTimeout(() => {
//         console.log('KENCHI2')
//         callBack()  
//     }, 3000)
// }

// timeout2(() => {
//     console.log('Done2')
// })



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// const timer1 = setTimeout(function(){
//     console.log('KENCHI')
// }, 3000)

// // 화살표 함수 사용
// const timer = setTimeout(() => {
//     console.log('KENCHI')
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//     clearTimeout(timer)
//     clearTimeout(timer1)
// })

// const timer3 = setInterval(function(){
//     console.log('KENCHI')
// }, 3000)

// // 화살표 함수 사용
// const timer4 = setInterval(() => {
//     console.log('KENCHI')
// }, 3000)

// h1El.addEventListener('click', () => {
//     clearInterval(timer3)
//     clearInterval(timer4)
// })



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// const b = 7

// double1()

// function double1(){
//     console.log('double1: ', b * 2)
// }

// const a = 7

// double()

// const double = function() {
//     console.log('double: ', a * 2)
// }

// Uncaught TypeError: double is not a function 
// 함수표현 이전에 호출이되면 Error 발생



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 즉시실행함수(함수의 생성과 동시 호출)
// IIFE, Immediately-Invoked Function Expression

// const a = 7
// function double() {
//     console.log(a * 2)
// }
// double();

// // 즉시실행함수1 - (함수)()
// (function () {
//     console.log(a * 2)
// })();

// // 즉시실행함수2 - (함수())
// (function () {
//     console.log(a * 2)
// }());


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 화살표 함수
// (매개변수) => {} vs function (매개변수) {}

// 일반 함수
// const double = function(x) {
//     return x * 2
// }
// console.log('double: ', double(7))

// 화살표 함수
// const doubleArrow = (x) => {
//     return x * 2
// }
// console.log('doubleArrow: ', doubleArrow(7))

// 화살표 함수 축약형
// const doubleArrow1 = x => x * 2
// console.log('doubleArrow1: ', doubleArrow1(7))

// 화살표 함수 축약형(객체)
// const doubleArrow2 = x => ({
//     name: 'KENCHI'
// })
// console.log('doubleArrow2: ', doubleArrow2(7))



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 함수 복습

// arguments: 함수 안에서 따로 매개변수를 지정하지 않아도 arguments라는 객체를 사용할 수 있다.
//            함수 안에서 언제든지 사용 가능.
// function sum(){
//     console.log(arguments)
//     return arguments[0] + arguments[1]
// }

// 일반적으로 이름을 지정해서 인수가 어떤 의미인지를 조금은 명시적으로 나타내는 것이 권장.
// function sum1(x, y){
//     return x + y
// }

// console.log(sum(7, 3))
// console.log(sum1(7, 3))


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 형 변환(Type conversion)

// const a = 1
// const b = '1'

// console.log(a === b)  // false
// console.log(a == b)  // true

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

// if(true) {
//     console.log(true)  // true
// }
// if(false) {
//     console.log(false)  // 출력 X
// }
// if('false') {
//     console.log('참 같은 값')  // 참 같은 값
// }
// if({}) {
//     console.log('참 같은 값2')  // 참 같은 값
// }
// if(0) {
//     console.log('거짓 같은 값')  //  출력 X
// }
// if(NaN) {
//     console.log('거짓 같은 값')  //  출력 X
// }



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 변수 유효범위(Variable Scope)
// var, let, const
// let, const : 범위 - 블록 
// var : 범위 - 함수

// function scope(){
//     if(true){
//         const a = 123
//         console.log('scope :', a)  // scope : 123
//     }
//     // console.log(a)  // Uncaught ReferenceError: a is not defined 
    
// }

// function scope2(){
//     if(true){
//         var b = 123
//         console.log('scope2 :', b)  // scope : 123
//     }
//         console.log('scope2 :', b)  // scope : 123
    
// }
// scope()
// scope2()


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

// const ulEl = document.querySelector('ul')

// console.log(ulEl)

// for (let i = 0; i < 10; i += 1){
//     const li = document.createElement('li')  // li태그 생성
//     li.textContent = `list-${i + 1}`  // li태그 내용으로 생성
//     if((i + 1) % 2 === 0){  // 짝수일 경우
//         li.addEventListener('click', function(){  // 클릭 시 li.textContent 출력
//             console.log(li.textContent)
//         })
//     }
//     ulEl.appendChild(li)  // 자식요소로 삽입
// }



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import random from './getRandom'

// 조건문 (If statement)
// 조건문 (Switch statement)
// console.log(random())

// const a = random()

// switch(a) {
//     case 0:
//         console.log('a is 0')
//         break
//     case 2:
//         console.log('a is 2')
//         break
//     case 4:
//         console.log('a is 4')
//         break
//     default:
//         console.log('rest...')
// }

// if(a === 0) {
//     console.log('a is 0')
// } else if(a === 2){
//     console.log('a is 2')
// } else if(a === 4){
//     console.log('a is 4')
// } else {
//     console.log('rest...')
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 삼항 연산자(ternary operator)

// const a = 1 < 2  // true

// if(a){
//     console.log('참')
// }else {
//     console.log('거짓')
// }

// console.log(a ? '참' : '거짓')


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 논리 연산자(logical operator)

// const a = 1 === 1
// const b = 'AB' === 'AB'
// const c = true
// const d = false
// const e = false

// console.log(a)  // true
// console.log(b)  // true
// console.log(c)  // true

// 그리고 And 연산자
// console.log('&& :', a && b && c)  // true
// console.log('&& :', a && b && d)  // false
// 또는 Or 연산자
// console.log('|| :', a || b)  // true
// console.log('|| :', e || d)  // false
// 부정 Not
// console.log('! :', !d) // true

// 비교 연산자(comparison operator)

// const a = 1
// const b = 1
// const c = 2

// // 일치 연산자
// // console.log(a === b)  // true
// // console.log(a === c)  // false
// // console.log(a !== b)  // false
// // console.log(a !== c)  // true
// // console.log(a < b)  // false
// // console.log(a < c)  // true
// // console.log(a <= b)  // true


// // function isEqual(x, y){
// //     return x === y
// // }

// // console.log(isEqual(1, 1))  // true
// // console.log(isEqual(1, 2))  // false
// // console.log(isEqual(2, '2'))  // false


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // 산술 연산자(arithmetic operator)

//  console.log(1 + 2)  // 2
//  console.log(5 - 7)  // -2
//  console.log(3 * 4)  // 12 
//  console.log(10 / 2)  // 5
//  console.log(7 % 5)  // 나머지 연산자 // 2

// // 할당 연산자(assignment operator)

// let h = 2
// // h = h + 1  // 3
// // h += 1  // 3
// // h = h - 1  // 1 
// // h -= 1 // 1
// // h = h * 1  // 2 
// // h *= 1 // 2
// // h = h / 1  // 2
// // h /= 1 // 2
// console.log(h) 


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // 데이터 타입 확인
// // typeof: 데이터 타입 확인

// console.log('Hello World!');
// console.log(123);
// console.log(typeof 'Hello World!');
// console.log(typeof 123);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof {});
// console.log(typeof []);

// function getType(data){
//     return Object.prototype.toString.call(data)
// }

// console.log(getType(123))
// console.log(getType(false))

// function getTypeSlice(data){
//     return Object.prototype.toString.call(data).slice(8) 
// }

// console.log(getTypeSlice(123))
// console.log(getTypeSlice(false))

// function getTypeSlice2(data){
//     return Object.prototype.toString.call(data).slice(8, -1) 
// }

// console.log(getTypeSlice2(123))
// console.log(getTypeSlice2(false))
// console.log(getTypeSlice2(null))
// console.log(getTypeSlice2({}))
// console.log(getTypeSlice2([]))