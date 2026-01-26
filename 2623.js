/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {

    let cache = new Map();

    return function (...args) {

        if (cache.get(args.toString()) !== undefined) {
            return cache.get(args.toString());
        }

        const fnResponse = fn(...args)

        cache.set(args.toString(), fnResponse);

        return fnResponse;

    }
}
