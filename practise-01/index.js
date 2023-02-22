
const curringFuncParams = 4;

/**
 * 函数柯理化
 * @param fn 被柯理化的函数
 * @param args1 柯理化参数
 * @returns {any} 函数执行结果或柯理化链
 */
function currying(fn,...args1){
    return function (...args2){
        const combine = [...args2, ...args1];
        return combine.length>=curringFuncParams ? fn(...combine) : currying(fn, ...combine);
    }

}
const sum = (a, b, c, d) => a + b + c + d;
console.log(currying(sum)(1)(3)(2)(4));
console.log(currying(sum)(1,2,3,4));
console.log(currying(sum)(1,2)(3,4));

