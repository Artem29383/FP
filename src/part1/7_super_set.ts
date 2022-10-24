// @ts-ignore
class Set {
    has(value: number): boolean {
        // ...
        return true;
    }

    add(value: number): this {
        // ...
    }
}

// tslint:disable-next-line:max-classes-per-file
class MutableSet extends Set {
    delete(value: number): boolean {
        // ...
        return true
    }
}

interface A {
    good(x: number): string
    bad(x: number): string
}
interface B extends A {
    good(x: string | number): string;
    bad(x: string): string;
}

type ATYPE = {
    good(x: number): string
    bad(x: number): string
}

type BTYPE = ATYPE & {
    good(x: string | number): string;
    bad(x: string): string;
}

interface Animal {
    readonly name: string;
    eat(food: string): void;
    sleep(hours: number): void;
    dager(): void;
}

interface Feline {
    meow(): void
}

class Cat implements Animal, Feline {
    name = 'Whiskers'
    eat(food: string) {
        console.info('Ate some', food, '. Mmm!')
    }
    sleep(hours: number) {
        console.info('Slept for', hours, 'hours')
    }
    meow() {
        console.info('Meow')
    }

    dager(): void {
    }
}