/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {

    return {
        init: init,
        current: init,
        increment: function () {
            this.current++;
            return this.current;
        },
        decrement: function () {
            this.current--;
            return this.current;
        },
        reset: function () {
            this.current = this.init;
            return this.current;
        }
    }

};