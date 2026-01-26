/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {

    if(obj === null || obj === undefined || typeof classFunction !== 'function') {
        return false;
    }

    const protoArg = classFunction.prototype;

    let proto = Object.getPrototypeOf(Object(obj));

    while(proto !== null) {
        if(protoArg === proto) {
            return true;
        }

        proto = Object.getPrototypeOf(proto);
    }

    return false;
};