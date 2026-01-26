/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {

    const initialLength = nums.length;


    while (invalidArr(nums)) {
        for (let i = nums.length - 1; i >= 0; i--) {
            if (i - 1 >= 0 && nums[i] < nums[i - 1]) {
                nums = minimumPairRemovalRec(nums, i);
            }
        }
    }

    return initialLength - nums.length;
};

function minimumPairRemovalRec(nums, i) {
    const nextVal = nums[i + 1];

    const prevVal = nums[i - 1];

    if (nextVal != undefined) {
        const newVal = nums[i] + nextVal;
        nums[i] = newVal;
        nums.splice(i + 1, 1);
    }

    else if (prevVal != undefined) {
        const newVal = nums[i] + prevVal;
        nums[i - 1] = newVal;
        nums.splice(i, 1);
    }

    return nums;
}

function invalidArr(arr) {
    let prevElement;
    let error = arr.find(element => {
        if (prevElement && element < prevElement) {
            return true;
        }
        prevElement = element;
    });

    return error !== undefined;
}

const INPUT = [2, 2, -1, 3, -2, 2, 1, 1, 1, 0, -1];

console.log(minimumPairRemoval(INPUT));