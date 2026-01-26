/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {

    return findChars(text1, text2, 0);

    function findChars(text1Aux, text2Aux, count) {
        for (let index = 0; index < text2Aux.length; index++) {
            const char = text2Aux[index];
            const allText1Pos = findAllPos(char, text1Aux);

            if (allText1Pos && allText1Pos.length > 0) {
                let allReturns = allText1Pos.map((text1Pos) => {
                    findChars(text1Aux.slice(text1Pos + 1), text2Aux.slice(index + 1), count + 1);
                });

                allReturns = allReturns ? [...allReturns, count] : [count];

                const bigestCount = allReturns.sort((a, b) => a - b)[0];

                return findChars(text1Aux.slice(1), text2Aux, bigestCount);
            }

            if (!text1Aux || !text2Aux) {
                return count;
            } else {
                return findChars(text1Aux.slice(1), text2Aux, count);
            }
        }
    }

    function findAllPos(char, text) {

        let posList = [];

        return findFirstIndex(text);

        function findFirstIndex(textAux) {
            const hasIndex = textAux.indexOf(char);
            if (hasIndex !== -1) {
                posList.push(hasIndex);
                return findFirstIndex(textAux.slice(hasIndex + 1));
            }

            return posList;
        }

    }
};