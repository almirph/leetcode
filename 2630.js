/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {

    let cacheList = [new Map()];

    return function (...args) {

        const cacheKey = JSON.stringify({ ...args }).concat(args.length);

        for (let i = 0; i < cacheList.length; i++) {

            const objCached = cacheList[i].get(cacheKey);
            const diffArg = objCached && getDiffArgs(args, objCached.args);

            if (objCached && !diffArg) {
                return objCached.fnResult;
            } else if (objCached) {
                const newCache = new Map();
                const fnResult = fn(...args);
                newCache.set(cacheKey, { fnResult, args })
                cacheList = [...cacheList, newCache];
                return fnResult;
            }
        }

        const fnResult = fn(...args);
        cacheList[0].set(cacheKey, { fnResult, args })
        return fnResult;


    }

    function getDiffArgs(argsArr, cachedArgs) {
        const diffArg = argsArr.find((element, pos) => {
            if (Array.isArray(element) && Array.isArray(cachedArgs[pos])) {
                return getDiffArgs(element, cachedArgs[pos]);
            } else
                return element !== cachedArgs[pos];
        });

        return diffArg;
    }
}


let callCount = 0;
const memoizedFn = memoize(function (a) {
    callCount++;
    return a;

});

const getInput = () => { const o = {}; return [[o, o], [o, {}], [o, o]]; };



getInput().forEach(element => {
    memoizedFn(element);
});