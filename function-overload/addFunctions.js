module.exports = function (container, name, fn){
    const preFunc = container[name];
    container[name] = function (...args){
        if (args.length === fn.length){
            fn.apply(this, args);
        }else if (typeof preFunc === 'function' ){
            preFunc.apply(this, args);
        }else {
            console.log( `${args.length} arguments function ${name} is undefined!`)
        }
    }
    /**
     * first step :
     * add fn argument 0
     * container.find = (...args)=>{
     *    .....
     * }
     * execute store.find()
     * execution args.length = 0
     * fn()
     * if more args, cause preFunc is undefined, it goes else branch
     * * * * * * * * * * * * * * * *
     * step two :
     * add fn with 1 argument
     * this time,  preFunc and f1 is present so stored in current find function scope
     * execute no args find
     * it goes else if and execute last function which store in 1 args find function
     *
     * step more:
     * .......
     *
     * what if we break the order of arguments length while adding ?
     *
     * no difference.
     *
     */

}