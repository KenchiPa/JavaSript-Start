// 산술 연산자(arithmetic operator)

console.log(1 + 2)  // 2
console.log(5 - 7)  // -2
console.log(3 * 4)  // 12 
console.log(10 / 2)  // 5
console.log(7 % 5)  // 나머지 연산자 // 2

// 할당 연산자(assignment operator)

let a = 2
// a = a + 1  // 3
// a += 1  // 3
// a = a - 1  // 1 
// a -= 1 // 1
// a = a * 1  // 2 
// a *= 1 // 2
// a = a / 1  // 2
// a /= 1 // 2
console.log(a) 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 데이터 타입 확인
// typeof: 데이터 타입 확인

console.log('Hello World!');
console.log(123);
console.log(typeof 'Hello World!');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

function getType(data){
    return Object.prototype.toString.call(data)
}

console.log(getType(123))
console.log(getType(false))

function getTypeSlice(data){
    return Object.prototype.toString.call(data).slice(8) 
}

console.log(getTypeSlice(123))
console.log(getTypeSlice(false))

function getTypeSlice2(data){
    return Object.prototype.toString.call(data).slice(8, -1) 
}

console.log(getTypeSlice2(123))
console.log(getTypeSlice2(false))
console.log(getTypeSlice2(null))
console.log(getTypeSlice2({}))
console.log(getTypeSlice2([]))