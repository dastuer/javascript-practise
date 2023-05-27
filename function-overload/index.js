const addFunctions = require('./addFunctions');



// q: 为什么要用 AbortController
// a: 用于取消异步操作
//   例如：当用户在输入框输入时，如果用户输入的速度很快，那么就会有很多次请求，但是我们只需要最后一次请求的结果，前面的请求就可以取消了
// q: 怎么使用 AbortController
// a: 1. 创建一个 AbortController 对象
//   2. 调用 AbortController 对象的 abort 方法
//  3. 将 AbortController 对象的 signal 属性传递给 fetch 方法
// 4. 当调用了 AbortController 对象的 abort 方法时，fetch 就会抛出一个 DOMException 异常
// 5. 通过捕获异常来取消异步操作
// 6. 通过 AbortController 对象的 signal 属性的 aborted 属性来判断异步操作是否被取消

let controller = new AbortController();
controller.abort();



const store = {};
addFunctions(store, 'find', (a)=>{ console.log('find args is 1'); });
addFunctions(store, 'find', ()=>{ console.log('find args is 0'); });
addFunctions(store, 'find', (a, b, c)=>{ console.log('find args is 3'); });
addFunctions(store, 'find', (a,b)=>{ console.log('find args is 2'); });
store.find(1,2,1,2,2,2,1);
store.find(1,3,1);