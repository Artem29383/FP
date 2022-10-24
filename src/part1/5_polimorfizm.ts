type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}

const filter = <T>(array: T[], f: (item: T) => boolean): T[] => {
    let result: T[] = []
    for (let i = 0; i < array.length; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}

console.info(filter(['a', 'b'], _ => _ !== 'b'));
console.log(filter([1, 2, 3, 4, 5], _ => _ > 2));

let names = [
    {firstName: 'beth'},
    {firstName: 'caitlyn'},
    {firstName: 'xin'}
]
console.log(filter(names, _ => _.firstName.startsWith('b')));

function map<T, U>(array: T[], f: (item: T) =>
    U): U[] {
    let result: U[] = []
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i])
    }
    return result
}

type MyEvent<T> = {
    target: T | null
    type: string
}

type TimedEvent<T> = {
    event: MyEvent<T>
    from: Date
    to: Date
}

const Emitter: TimedEvent<HTMLDivElement> = {
    event: {
        target: document.querySelector('#'),
        type: 'click',
    },
    from: new Date(),
    to: new Date(),
}
console.info(Emitter)

type TreeNode = {
    value: string
}
type LeafNode = TreeNode & {
    isLeaf: true
}
type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
}

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
    return {
        ...node,
        value: f(node.value),
    }
}

let aa: TreeNode = {value: 'a'};
let bb: LeafNode = {value: 'b', isLeaf: true}
let cc: InnerNode = {value: 'c', children: [bb]}
let a1 = mapNode(aa, _ => _.toUpperCase()) // TreeNode
let b1 = mapNode(bb, _ => _.toUpperCase()) // LeafNode
let c1 = mapNode(cc, _ => _.toUpperCase()) // InnerNode


function call<T extends [unknown, string, ...unknown[]],R>(
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args)
}
function fill(length: number, value: string): string[] {
    return Array.from({length}, () => value)
}
call(fill, 10, 'a')


//
// Compare a string and a string
is('string', 'otherstring') // false

// Compare a boolean and a boolean
is(true, false) // false

// Compare a number and a number
is(42, 42) // true

// Comparing two different types should give a compile-time error
is(10, 'foo') // Error TS2345: Argument of type '"foo"' is not assignable
// to parameter of type 'number'.

// [Hard] I should be able to pass any number of arguments
is([1], [1, 2], [1, 2, 3]) // false

function is<T>(a: T, ...b: [T, ...T[]]): boolean {
    return b.every(_ => _ === a);

}