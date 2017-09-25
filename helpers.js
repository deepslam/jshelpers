Object.has = function(obj, key) {
    return key.split(".").every(function(x) {
        if(typeof obj != "object" || obj === null || typeof obj[x] == 'undefined') {
            return false;
        }
        obj = obj[x];
        return true;
    });
};

Object.get = function(obj, key) {
    return key.split(".").reduce(function(o, x) {
        return (typeof o == "undefined" || o === null) ? o : o[x];
    }, obj);
};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

Object.uniq = function(length) {
    return Math.random().toString(length).substr(2, length-2);
}
