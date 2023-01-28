export default function getType(data){
    return Object.prototype.toString.call(data).slice(8, -1) 
}

/*
export를 이용하여 JavaScript 내용을 내보낼 수 있다.
*/