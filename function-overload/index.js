const addFunctions = require('./addFunctions');
const store = {};
addFunctions(store, 'find', (a)=>{ console.log('find args is 1'); });
addFunctions(store, 'find', ()=>{ console.log('find args is 0'); });
addFunctions(store, 'find', (a, b, c)=>{ console.log('find args is 3'); });
addFunctions(store, 'find', (a,b)=>{ console.log('find args is 2'); });
store.find(1,2,1,2,2,2,1);
console.log()