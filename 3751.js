/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function (num1, num2) {

    let counter = 0;

    for (let i = num1; i <= num2; i++) {

        listSubNumbers(i).forEach(n => {
            if (isPeak(n)) {
                counter++;
            }
        })

    }

    return counter;


    function listSubNumbers(num) {
        let list = [];
        const stringNum = num.toString();

        Array.from(stringNum).forEach((char1, pos) => {
            let char2 = stringNum[pos + 1];
            let char3 = stringNum[pos + 2];
            if (char1 !== undefined && char2 !== undefined && char3 !== undefined) {
                list.push(`${char1}${char2}${char3}`);
            }
        });

        return list;
    }


    function isPeak(num) {
        const numArr = Array.from(num).map(n => parseInt(n));

        if ((numArr[0] < numArr[1] && numArr[2] < numArr[1]) || (numArr[0] > numArr[1] && numArr[2] > numArr[1])) {
            return true;
        }

        return false;
    }

};