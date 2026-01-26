/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {

    if (n === 0) {
        return arr;
    }

    const newArr = setDeep(arr, 1);

    return newArr;

    function setDeep(deepArr, deepN) {

        for (let i = 0; i < deepArr.length; i++) {
            if (!(typeof deepArr[i] === 'object' && deepArr[i].length)) {
                continue;
            } else {
                const arrayToinsert = [...deepArr[i]];
                const deepArrLeft = deepArr.slice(0, i);
                const deepArrRight = deepArr.slice(i + 1);
                deepArr = [...deepArrLeft, ...arrayToinsert, ...deepArrRight];
                i+=arrayToinsert.length -1;
            }
        }

        if(deepN < n) {
            return setDeep(deepArr, deepN + 1);
        }

        return deepArr;
    }
};