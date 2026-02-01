/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {

    const twoSmallerIndexRet = twoSmallerIndex();

    return nums[0] + nums[twoSmallerIndexRet[0]] + nums[twoSmallerIndexRet[1]];


    function twoSmallerIndex() {
        const smaller = nums[1] > nums[2] ? 2 : 1;
        const secondSmaller = smaller === 1 ? 2 : 1;
        let indexes = [smaller, secondSmaller];

        nums.forEach((num, pos) => {
            if (pos === nums.length || pos === 0 || pos === 1|| pos === 2) {
                return;
            }
            else if (num <= nums[indexes[0]]) {
                indexes[1] = indexes[0];
                indexes[0] = pos;
            } else if (num <= nums[indexes[1]] && indexes[0] !== pos) {
                indexes[1] = pos;
            }
        })

        return indexes;

    }

};