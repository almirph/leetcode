let array = [
    { "id": "1" },
    { "id": "1" },
    { "id": "2" }
];
const fn = function (item) {
    return item.id;
}

Array.prototype.groupBy = function (fn) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        const fnResult = fn(this[i]);
        if (!newArr[fnResult]) {
            newArr[fnResult] = [this[i]];
        } else {
            newArr[fnResult].push(fnResult);
        }
    }

    return newArr;


};


