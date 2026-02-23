/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    const binaryN = n.toString(2);

    let prev;
    let success = true;

    for (const char of binaryN) {
        if (prev === char) {
            success = false;
            break;
        }

        prev = char;
    }

    return success;
};

console.log(hasAlternatingBits(1111));