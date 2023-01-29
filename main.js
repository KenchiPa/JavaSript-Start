



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 배열(2)
// .filter()
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = numbers.map(number => {
//     return number < 3
// })
// console.log(a)

// const b = numbers.filter(number => {
//     return number < 3
// })
// console.log(b)

// console.log(numbers)

// // .find() .findIndex()
// const c = fruits.find(fruit => {
//     return /^B/.test(fruit)
// })
// console.log(c)

// const d = fruits.findIndex(fruit => {
//     return /^B/.test(fruit)
// })
// console.log(d)

// // .includes()
// const e = numbers.includes(3)
// console.log(e)

// const f = fruits.includes('KENCHI')
// console.log(f)

// // .push() .unshift()
// // 원본 수정됨 주의
// numbers.push(5)
// console.log(numbers)

// numbers.unshift(0)
// console.log(numbers)

// // .reverse()
// // 원본 수정됨 주의
// numbers.reverse()
// fruits.reverse()

// console.log(numbers)
// console.log(fruits)

// // .splice()
// // 원본 수정됨 주의
// numbers.splice(2, 2)
// console.log(numbers)

// numbers.splice(2, 0, 999)
// console.log(numbers)

// numbers.splice(2, 1, 1000)
// console.log(numbers)



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 배열(1)
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(numbers)
// console.log(fruits)
// console.log(numbers[0])
// console.log(fruits[0])

// // .length
// console.log(numbers.length)
// console.log(fruits.length)
// console.log([1, 2].length)

// console.log([].length)

// // .concat(): 2개의 배열 데이터를 병합해서 새로운 배열데이터를 반환
// console.log(numbers.concat(fruits))
// console.log(numbers)
// console.log(fruits)

// // .forEach(): 배열 데이터의 갯수만큼 콜백함수가 반복 실행이 된다.
// fruits.forEach(function(element, index, array){
//     console.log(element, index, array)
// })

// // .map(): 인수로 사용하는 콜백의 내부에서 반환하는 하나의 데이터를 가지고, 그 데이터들을 모아서 새로운 배열로 반환한다.

// const a = fruits.forEach(function(fruit, index){
//     console.log(`${fruit}-${index}`)
// })
// console.log(a)

// const b = fruits.map(function(fruit, index){
//     return `${fruit}-${index}`
// })
// console.log(b)

// const c = fruits.map(function(fruit, index){
//     return {
//         id: index,
//         name: fruit
//     }
// })
// console.log(c)



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math

// 절대값
// console.log('abs: ', Math.abs(-12))
// // 최소값
// console.log('min: ', Math.min(2, 8))
// // 최대값
// console.log('max: ', Math.max(2, 8))
// // 올림값
// console.log('ceil: ', Math.ceil(3.14))
// // 내림값
// console.log('floor: ', Math.floor(3.14))
// // 반올림값
// console.log('round: ', Math.round(3.14))
// // 반올림값
// console.log('round: ', Math.round(3.5))
// // 랜덤수
// console.log('random: ', Math.random())



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const pi = 3.14159265358979
// console.log(pi)  // 3.14159265358979

// const str = pi.toFixed(2)
// console.log(str)  // 3.14
// console.log(typeof str)  // string

// const integer = parseInt(str)
// const float = parseFloat(str)
// console.log(integer)  // 3
// console.log(float)  // 3.14
// console.log(typeof integer, typeof float)  // number number


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JS 데이터

// String: "", '', ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}

// String.prototype.indexOf()
// const result = 'Hello world!'.indexOf('world')
// console.log(result)  // 6

// const result1 = 'Hello world!'.indexOf('Kenchi')
// console.log(result1)  // -1

// const str = '0123'
// console.log(str.length)  // 4

// const str1 = 'Hello world!'
// console.log(str1.indexOf('Kenchi') !== -1)  // false

// const str2 = 'Hello world!'
// console.log(str2.slice(0, 3))   // Hel slice(x, y): x에서 시작해서 y직전까지 잘라낼 것이다 라는 것
// console.log(str2.replace('world', 'KENCHI'))  // Hello KENCHI!
// console.log(str2.replace(' world!', ''))  // Hello

// const str3 = 'kenchi6734@naver.com'
// console.log(str3.match(/.+(?=@)/))
// console.log(str3.match(/.+(?=@)/)[0])

// const str4 = '    Hello world   '
// console.log(str4)  //     Hello world   
// console.log(str4.trim())  // Hello world




// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 상속(확장)

// class Vehicle {
//     constructor(name, wheel) {
//         this.name = name
//         this.wheel = wheel
//     }
// }
// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//     constructor(name, wheel) {
//         super(name, wheel)
//     }
// }
// const myBicycle = new Bicycle('삼천리', 2)
// const daughtersBicycle = new Bicycle('세발', 3)
// console.log(myBicycle)
// console.log(daughtersBicycle)

// class Car extends Vehicle {
//     constructor(name, wheel, license) {
//         super(name, wheel)
//         this.license = license
//     }
// }
// const myCar = new Car('벤츠', 4, true)
// const daughtersCar = new Car('포르쉐', false)

// console.log(myCar)
// console.log(daughtersCar)




// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ES6 Classes: ES6에서 처음 등장한 JS Class 패턴
// Before
// const kenchi1 = {
//     name: 'Kenchi',
//     normal: function() {
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name)
//     }
// }

// // After
// const kenchi = {
//     name: 'Kenchi',
//     normal() {
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name)
//     }
// }

// kenchi1.normal()
// kenchi1.arrow()
// kenchi.normal()
// kenchi.arrow()

// // Before
// function User(first, last){
//     this.firstName = first
//     this.lastName = last
// }
// User.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }

// // After
// class User1 {
//     constructor(first, last) {
//         this.firstName = first
//         this.lastName = last
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const kenchi2 = new User('Kenchi', 'Papa')
// const amy = new User('Amy', 'Papa')
// const neo = new User('Neo', 'Papa')
// const kenchi3 = new User1('Kenchi', 'Papa')
// const amy1 = new User1('Amy', 'Papa')
// const neo1 = new User1('Neo', 'Papa')

// console.log(kenchi2)
// console.log(amy.getFullName())
// console.log(neo.getFullName())
// console.log(kenchi3)
// console.log(amy1.getFullName())
// console.log(neo1.getFullName())





// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의

// const kenchi = {
//     name: 'Kenchi',
//     normal: function() {
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name)
//     }
// }
// kenchi.normal()  // Kenchi
// kenchi.arrow()  // undefined

// const amy = {
//     name: 'Amy',
//     normal: kenchi.normal,
//     arrow: kenchi.arrow
// }
// amy.normal()
// amy.arrow()

// function User(name){
//     this.name = name
// }
// User.prototype.normal = function() {
//     console.log(this.name)
// }
// User.prototype.arrow = () => {
//     console.log(this.name)
// }

// const kenchi1 = new User('Kenchi')

// kenchi1.normal()
// kenchi1.arrow()

// const timer = {
//     name1: 'Kenchi!',
//     timeoutNormal: function() {
//         setTimeout(function() {
//             console.log(this.name1)
//         }, 2000)
//     },
//     timeoutArrow: function() {
//         setTimeout(() => {
//             console.log(this.name1)
//         }, 2000)
//     }
// }
// timer.timeoutNormal()
// timer.timeoutArrow()



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 생성자 함수(prototype)

// const kenchi = {
//     firstName: 'KENCHI',  // 속성
//     lastName: 'PAPA',  // 속성
//     // 메서드
//     // this가 소속되어져 있는 함수가 실행되는 그 객체 데이터를 지칭한다.
//     getFullName: function(){  
//         return `${this.firstName} ${this.lastName}`  
//     }
// }

// console.log(kenchi)
// console.log(kenchi.getFullName())

// function User(first, last){
//     this.firstName = first
//     this.lastName = last
// }
// User.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }

// const kenchi1 = new User('Kenchi', 'Papa')
// const amy = new User('Amy', 'Papa')
// const neo = new User('Neo', 'Papa')

// console.log(kenchi1)
// console.log(amy)
// console.log(neo)
// console.log(kenchi1.getFullName())
// console.log(amy.getFullName())
// console.log(neo.getFullName())





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