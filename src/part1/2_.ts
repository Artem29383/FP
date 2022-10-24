type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

const a: CatOrDogOrBoth = {
    name: 'sdf',
    purrs: false,
    barks: !!'asd',
    wags: false,
}

const b: CatAndDog = {
    name: 'sdf',
    purrs: false,
    barks: !!'asd',
    wags: false,
}
//console.info(a.barks) //error
//console.info(b.barks) // true