var debounce = function(fn, t) {

    let timeoutId = 0;
    
    return function(...args) {

        if(timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn(args);
        }, t);
        
    }
};

