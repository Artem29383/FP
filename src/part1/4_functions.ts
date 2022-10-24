function sumVariadic(...args: number[]): number {
    return args.reduce((total, n) => total + n, 0)
}

console.info(sumVariadic(1, 2, 3, 4, 5))

function* createFibonacciGenerator() {
    let a = 0
    let b = 1
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}

let fibonacciGenerator = createFibonacciGenerator()
//
// console.info(fibonacciGenerator.next())
// console.info(fibonacciGenerator.next())
// console.info(fibonacciGenerator.next())

let numbers = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n
        }
    }
}

console.info(numbers[Symbol.iterator]().next())

type Reservation = void;


type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}

let reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        // Book a one-way trip
    } else if (typeof toOrDestination === 'string') {
        // Book a round trip
    }
}

reserve(new Date(), new Date(), 'Baku')
reserve(new Date(), 'NY')

type CreateElement = {
    (tag: 'a'): HTMLAnchorElement
    (tag: 'canvas'): HTMLCanvasElement
    (tag: 'table'): HTMLTableElement
    (tag: string): HTMLElement
}

//перегрузка функций

// function createElement(tag?: 'a'): HTMLAnchorElement
// function createElement(tag?: 'canvas'): HTMLCanvasElement
// function createElement(tag?: 'table'): HTMLTableElement
// function createElement(tag?): HTMLElement {
//     if (tag === 'a') return new HTMLAnchorElement();
//     if (tag === 'canvas') return new HTMLCanvasElement();
//     if (tag === 'table') return new HTMLTableElement();
//     return new HTMLElement()
// }

// console.log(createElement('a'));
// console.log(createElement('canvas'));
// console.log(createElement('table'));
// console.log(createElement());

function getNumber(number: string): string;
function getNumber(number: number, isArray: boolean): number[]
function getNumber(strOrNumber: number | string, isArray?): number | number[] | string {
    if (typeof strOrNumber === 'string') {
        return 'Вы ввели строку, а надо число!';
    }
    if (isArray) {
        return  [strOrNumber];
    }
    return strOrNumber * strOrNumber;
}

console.info(getNumber(5, true));
console.info(getNumber(5, false));
console.info(getNumber('666'));