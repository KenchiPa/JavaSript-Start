// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

console.log(ulEl)

for (let i = 0; i < 10; i += 1){
    const li = document.createElement('li')  // li태그 생성
    li.textContent = `list-${i + 1}`  // li태그 내용으로 생성
    if((i + 1) % 2 === 0){  // 짝수일 경우
        li.addEventListener('click', function(){  // 클릭 시 li.textContent 출력
            console.log(li.textContent)
        })
    }
    ulEl.appendChild(li)  // 자식요소로 삽입
}



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