/*export default function getType(data){
    return Object.prototype.toString.call(data).slice(8, -1) 
}
*/

// default export: 이름을 지정하지 않아도 된다.
export default function (data){
    return Object.prototype.toString.call(data).slice(8, -1) 
}

// default export의 경우 하나만 지정하여 사용할 수 있다. 중복 X
// export default 123  // Only one default export allowed permodule.
/*
export를 이용하여 JavaScript 내용을 내보낼 수 있다.
*/