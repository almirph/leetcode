/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    const bin = n.toString(2);

    let longest = 0;
    let longestCounter = 0;

    for (const char of bin) {
        if (char === '1') {
            longest = longestCounter > longest ? longestCounter : longest;
            longestCounter = 1;
        } else {
            longestCounter++;
        }
    }

    return longest;
};

console.log(binaryGap(22));
console.log(binaryGap(8));