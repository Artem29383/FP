// let a = 1 + 2
// let b = a + 3
// let c = {
//         apple: a,
//         banana: b
//     }
// let d = c.apple * 4

// let a: unknown
// const b = a === 123
// // const c = a + 10
// a = 10
// if (typeof a === 'number') {
//     const d = a + 10_100_100_100
//     console.info(d)
// }
//
// let h: bigint = 100n
// console.info(h * 10n)

const obj: {[key: string]: number} = {
    a: 1,
}

obj.b = 11;
obj.a = 77;

console.info(obj.b)