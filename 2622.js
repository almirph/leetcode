var TimeLimitedCache = function () {

};

TimeLimitedCache.prototype.cache = new Map();

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {

    const savedObj = this.cache.get(key);

    if (savedObj) {
        clearTimeout(savedObj.timer);
    }

    const timeoutID =
        setTimeout(() => {
            this.cache.delete(key);
        }, duration);

    const obj = {
        value,
        timer: timeoutID
    }

    this.cache.set(key, obj)

    return savedObj ? true : false;

};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    const obj = this.cache.get(key);
    return obj ? obj.value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {

    return Array.from(this.cache)?.length;

};

const timeLimitedCache = new TimeLimitedCache()

while (true) {
    timeLimitedCache.set(1, 42, 10)
    timeLimitedCache.get(1)
    timeLimitedCache.set(1, 42, 10)
    timeLimitedCache.count()
}