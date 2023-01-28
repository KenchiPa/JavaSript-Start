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