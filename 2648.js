/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    let accumulator = [];

    while (true) {
        yield setAccumulator();
    }


    function setAccumulator() {
        if (accumulator.length === 0) {
            accumulator = [0];
        } else if (accumulator.length === 1) {
            accumulator = [0, 1];
        } else {
            const accumulatorSum = accumulator.reduce((r, val) => r + val, 0);
            accumulator.shift();
            accumulator.push(accumulatorSum);
        }

        return accumulator[1] ? accumulator[1] : accumulator[0];
    }

};