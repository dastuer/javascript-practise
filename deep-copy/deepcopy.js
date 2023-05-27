function simpleDeepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const cache = new WeakMap();
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (cache.has(obj)) {
        return cache.get(obj);
    }
    const copy = Array.isArray(obj) ? [] : {};
    copy.__proto__ = obj.__proto__;
    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key]);
    });
    cache.set(obj, copy);
    return copy;
}
// const a = {
//     name: 'a',
//     age: 1,
//     child: {
//         name: 'b',
//     },
//     arr: [1, 2, 3],
// }
// "成年人"的英文翻译 是什么？
//
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Adult extends Person{
    constructor(name, age, job, salary){
        super(name, age);
        this.job = job;
        this.salary = salary;
    }
    get birthday(){
        const date = new Date();
        date.setFullYear(date.getFullYear() - this.age);
        return date;
    }
}

const a = new Adult('a', 1, 'programmer', 10000);

const copy = deepCopy(a);
console.log(a, copy, copy.birthday);
// deep copy by message channel

deepCopyByChannel = (obj) => {
    return new Promise((resolve) => {
        const {port1, port2} = new MessageChannel();
        port1.onmessage = (event) => {
            resolve(event.data);
        };
        port2.postMessage(obj);
    });
}
async function asyncPrint(){
    const cp = await deepCopyByChannel(a);
    console.log('from', cp);
}
asyncPrint();
// SyntaxError: await is only valid in async functions and the top level bodies of modules ?
// how to use await in a nodejs file?
//
//
// message channel is not supported in nodejs
