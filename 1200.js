/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {

    let returnList = new Map();

    let diffKey;

    arr = arr.sort((a, b) => a - b);

    arr.forEach((elementI, pos) => {
        if (arr[pos + 1]) {
            const elementJ = arr[pos + 1];
            const diff = Math.abs(elementI - elementJ);
            if (elementI !== elementJ && (diff <= diffKey || !diffKey)) {
                diffKey = diff;
                addToMap(elementI, elementJ, diff);
            }
        }
    })

    const smallestKey = getSmalestKey();

    return smallestKey;

    function getSmalestKey() {
        return returnList.get(diffKey);
    }

    function addToMap(elementI, elementJ, diff) {

        const key = diff;
        let list = returnList.get(key);
        const elementToAdd = elementI > elementJ ? [elementJ, elementI] : [elementI, elementJ];

        if (list) {
            list = [...list, elementToAdd];
            returnList.set(key, list);
        } else {
            returnList.set(key, [elementToAdd]);
        }

    }

};