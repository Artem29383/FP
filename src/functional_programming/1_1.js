// import curry from 'lodash.curry';
//document.querySelector('#msg')!.innerHTML = '<h1>Hello world<h1/>'
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//function printMessage(elementId, format, message) {
//    document.querySelector(`#${elementId}}`)!.innerHTML = `<${format}>${message}<${format}/>`
//}
//printMessage('msg', 'h1', 'hello world')
var pipe = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (value) { return fns.reduce(function (currentValue, f) { return f(currentValue); }, value); };
};
var compose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (value) { return fns.reduceRight(function (currentValue, f) { return f(currentValue); }, value); };
};
var db = [{
        id: '444-44-44-44',
        ssn: '123',
        firstname: 'ALOX',
        lastname: 'haah'
    }];
// const elementId = '123';
//
// function showStudent(ssn) {
//     const student = db.find(ssn);
//     if (student !== null) {
//         document.querySelector(`#${elementId}`)!.innerHTML = `${student.ssn}, ${student.firstname}, ${student.lastname}`;
//     } else {
//         throw new Error('Student not found!');
//     }
// }
// function curry(func) {
//     return function curried(this: any, ...args) {
//         if (args.length >= func.length) {
//             return func.apply(this, args);
//         } else {
//             return function(this: any, ...args2) {
//                 return curried.apply(this, args.concat(args2));
//             }
//         }
//     };
//
// }
function curry(fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.length >= fn.length ? fn.apply(void 0, args) : curry(fn.bind.apply(fn, __spreadArray([null], args, false)));
    };
}
// const find = curry((db, id: string) => {
//     const obj = db.find(object => object.id === id);
//     if (obj === null) {
//         throw new Error('Object not found!')
//     }
//
//     return obj;
// })
// const csv = student => {
//     return `${student.ssn}, ${student.firstname}, ${student.lastname}`;
// }
//
// const append = curry((selector, info) => {
//     // document.querySelector(selector)!.innerHTML = info;
//     return [selector, info];
// })
var showStudent = compose(
// append('#student-info'),
// csv,
curry(function (db, id) {
    var obj = db.find(function (object) { return object.id === id; });
    if (obj === null) {
        throw new Error('Object not found!');
    }
    return obj;
})(db));
console.log(showStudent('444-44-44-44'));
//PIPE
// const getName = (person) => person.name
// const uppercase = (string) => string.toUpperCase()
// const get6Characters = (string) => string.substring(0, 6)
// const reverse = (string) => string
//     .split('')
//     .reverse()
//     .join('')
//
// console.log(pipe(
//     getName,
//     uppercase,
//     get6Characters,
//     reverse
// )({name: 'Buckethead'}));
