/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat, threshold) {

    if(mat.length === 0 || mat[0].length === 0 ) {
        return 0;
    } else if (mat.length === 1){
        return validateArr(mat[0], threshold) ? 1 : 0;
    }

    let calcSumRes = 0;
    let sqrSizeRes = 0;

    const maxSqrSize = mat.length < mat[0].length ? mat.length : mat[0].length;
    let actualSqrSize = maxSqrSize;
    const xSize = mat[0].length;
    const ySize = mat.length;

    outer: while (actualSqrSize >= 2) {

        for (let y = 0; y + actualSqrSize <= ySize; y++) {
            for (let x = 0; x + actualSqrSize <= xSize; x++) {
                const slicedMat = sliceMat(mat, x, x + actualSqrSize, y, y + actualSqrSize);

                if (!validSize(slicedMat, actualSqrSize)) {
                    break;
                }

                const calcSum = matSum(slicedMat);

                if (calcSum === threshold) {
                    sqrSizeRes = actualSqrSize;
                    break outer;
                }

                else if (calcSum > calcSumRes && calcSum < threshold) {
                    calcSumRes = calcSum;
                    sqrSizeRes = actualSqrSize;
                }
            }

        }

        if (sqrSizeRes) {
            break outer;
        }

        actualSqrSize--;
    }



    return sqrSizeRes;


    function validSize(mat, size) {
        const ySize = mat.length;
        const xSize = mat[0].length;

        return ySize === size && xSize === size ? true : false;

    }

    function sliceMat(mat, yStart, yFinish, xStart, xFinish) {
        const xSlicedMat = mat.slice(yStart, yFinish);
        let yxSlicedMatrix = [];
        xSlicedMat.forEach((row) => {
            yxSlicedMatrix.push(row.slice(xStart, xFinish))
        });

        return yxSlicedMatrix;
    }

    function matSum(mat) {
        let store = 0;

        mat.forEach(element => {
            store += arrSum(element);
        });

        return store;
    }


    function arrSum(arr) {
        return arr.reduce((c, v) => c + v, 0)
    }

    function validateArr(arr, threshold) {
        const filteredVal = arr.find(element => {
            return element <= threshold;
        })

        return filteredVal != undefined;
    }
};