/**
 * @param {number[][]} lists
 * @return {number}
 */
var minMergeCost = function (lists) {

    let totalCost = 0;
    minMergeCostRecursion(lists);
    return totalCost;



    function minMergeCostRecursion(listsRecursion) {
        if (listsRecursion.length <= 1) {
            return;
        }
        const smalestCost = getSmalestCost(listsRecursion);
        const newList = mergeLists(listsRecursion[smalestCost.pos1], listsRecursion[smalestCost.pos2]);

        listsRecursion.splice(smalestCost.pos1, 1);
        listsRecursion.splice(smalestCost.pos2 - 1, 1);

        listsRecursion.push(newList);

        totalCost += smalestCost.cost;

        minMergeCostRecursion(listsRecursion);
    }

};

function getSmalestCost(lists) {
    let smalestCost = {
        cost: null,
        pos1: null,
        pos2: null
    };

    lists.forEach((element, pos) => {
        for (let posJ = pos; posJ < lists.length; posJ++) {
            const elementJ = lists[posJ];
            if (element && elementJ && pos !== posJ) {
                const cost = calculateCost(element, lists[posJ]);
                if (!smalestCost.cost || cost < smalestCost.cost) {
                    smalestCost.cost = cost;
                    smalestCost.pos1 = pos;
                    smalestCost.pos2 = posJ;
                }
            }
        }
    })

    return smalestCost;
}

function calculateCost(list1, list2) {

    let medianIndex1 = Math.floor(list1.length / 2);
    let medianIndex2 = Math.floor(list2.length / 2);

    medianIndex1 = list1.length % 2 === 0 ? medianIndex1 - 1 : medianIndex1;
    medianIndex2 = list2.length % 2 === 0 ? medianIndex2 - 1 : medianIndex2;

    return list1.length + list2.length + Math.abs(list1[medianIndex1] - list2[medianIndex2]);
}

function mergeLists(list1, list2) {
    let newList = [];
    while (list1.length > 0 || list2.length > 0) {
        if (list1.length === 0) {
            newList = [...newList, ...list2];
            list2 = [];
        } else if (list2.length === 0) {
            newList = [...newList, ...list1];
            list1 = [];
        } else if (list1 >= list2) {
            newList.push(list2.shift());
        } else if (list2 > list1) {
            newList.push(list1.shift());
        }
    }

    return newList;
}


