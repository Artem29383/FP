import _isPlaceholder from "./_isPlaceholder.js";

function _curry1(fn) {
    return function f1(a) {
        if (arguments.length === 0 || _isPlaceholder(a)) {
            return f1;
        } else {
            return fn.apply(this, arguments);
        }
    };
}

function _curry2(fn) {
    return function f2(a, b) {
        switch (arguments.length) {
            case 0:
                return f2;
            case 1:
                return _isPlaceholder(a)
                    ? f2
                    : _curry1(function(_b) { return fn(a, _b); });
            default:
                return _isPlaceholder(a) && _isPlaceholder(b)
                    ? f2
                    : _isPlaceholder(a)
                        ? _curry1(function(_a) { return fn(_a, b); })
                        : _isPlaceholder(b)
                            ? _curry1(function(_b) { return fn(a, _b); })
                            : fn(a, b);
        }
    };
}

console.log(_curry1());