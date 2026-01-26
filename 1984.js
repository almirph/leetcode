/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {

    if (nums.length <= 1) {
        return 0;
    }

    let response = null;

    nums.sort((a, b) => b - a);

    nums.forEach((element, pos) => {
        const elementJ = nums[pos + k - 1];
        if (element !== undefined && elementJ !== undefined) {
            const calcDiff = element - elementJ;
            pushToResponse(calcDiff >= 0 ? calcDiff : elementJ - element);
        }
    });

    return response;

    function pushToResponse(calc) {
        if (response === null || calc < response) {
            response = calc;
        }
    }

};