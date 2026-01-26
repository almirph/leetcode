/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {

    if (rowsCount * colsCount !== this.length) {
        return [];
    }

    let mat = [];
    for (let i = 0; i < rowsCount; i++) {
        mat.push([]);
    }

    let rowCounter = 0;
    let flipFlag = false;
    this.forEach((element) => {
        if (!flipFlag) {
            mat[rowCounter].push(element)
        } else {
            mat[rowsCount - 1 - rowCounter].push(element)
        }

        if (rowCounter + 1 === rowsCount) {
            rowCounter = 0;
            flipFlag = !flipFlag;
        }
        else rowCounter++;

    })

    return mat;

}