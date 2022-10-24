// import curry from 'lodash.curry';
//document.querySelector('#msg')!.innerHTML = '<h1>Hello world<h1/>'

//function printMessage(elementId, format, message) {
//    document.querySelector(`#${elementId}}`)!.innerHTML = `<${format}>${message}<${format}/>`
//}

//printMessage('msg', 'h1', 'hello world')

const pipe = (...fns) => value => fns.reduce((currentValue, f) => f(currentValue), value)
const compose = (...fns) => value => fns.reduceRight((currentValue, f) => f(currentValue), value)

const db: any[] = [{
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
    return (...args) => {
        return args.length >= fn.length ?
            fn(...args) : curry(fn.bind(null, ...args))
    }
}

const find = curry((db, id: string) => {
    const obj = db.find(object => object.id === id);
    if (obj === null) {
        throw new Error('Object not found!')
    }

    return obj;
})

const csv = student => {
    return `${student.ssn}, ${student.firstname}, ${student.lastname}`;
}

const append = curry((selector, info) => {
    // document.querySelector(selector)!.innerHTML = info;
    return [selector, info];
})

const showStudent = compose(
    append('#student-info'),
    csv,
    find(db)
)


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