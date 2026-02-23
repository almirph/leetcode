/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {

    let flatArr = arr;

    while (!isArrFlat(flatArr)) {
        flatArr = flatArr.flat();
    }

    for (const element of flatArr) {
        yield element;
    }

    function isArrFlat(arrIt) {
        for (let i = 0; i < arrIt.length; i++) {
            if (typeof arrIt[i] !== "number") {
                return false;
            }
        }

        return true;
    }

};


const gen = inorderTraversal([[[6]], [1, 3], []]);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
