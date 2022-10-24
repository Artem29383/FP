const compose = (...fns) => value => fns.reduceRight((currentValue, f) => f(currentValue), value)
function curry(fn) {
    return (...args) => {
        return args.length >= fn.length ?
            fn(...args) : curry(fn.bind(null, ...args))
    }
}
function partial(func) {
    const args = Array.prototype.slice.call(arguments, 1);
    return function() {
        const allArguments = args.concat(Array.prototype.slice.call(arguments));
        return func.apply(this, allArguments);
    };
}

const text = ['a', 'д', 'cc', null, 'f', 'a', undefined, 'ff', 'd', 'ff'];

const words = (text) => text.filter(Boolean);

const uniq = (array) => {
    const object = array.reduce((acc, item) => {
        acc[item] = !acc[item] ? 1 : acc[item] + 1;
        return acc;
    }, {});

    return Object.keys(object).filter(key => object[key] === 1);
};

const count = array => array.length;

const translate = (lang, words) => words.filter(word => lang.test(word));
const curriedTranslate = curry(translate);
const translateRu = curriedTranslate(/[а-яА-я]+/ig);

const uniqueWords = compose(count, translateRu, uniq, words);
console.info(uniqueWords(text));

function summa(x, y, z) {
    return x+y+z;
}

const curriedSum = curry(summa);
// const partialSum = partial(summa, 42);
const partialSum = summa.bind(null, 42);

// console.info(partialSum(20, 38)); //100
// console.info(partialSum(17)) //NAN

console.info(partialSum(20, 38)) //100
console.info(curriedSum(5)(10)(20)) //35