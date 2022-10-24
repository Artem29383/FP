import {extends} from "tslint/lib/configs/latest";

type letters = 'a' | 'b' | 'c';

type RemoveC<TType> = TType extends 'c' ? never : TType;

type WithOutC = RemoveC<letters>;

const asaka = (b: WithOutC) => {
}

asaka('c');

/////

type LooseAutocomplete<T extends string> = T | Omit<string, T>

type IconSize = LooseAutocomplete<'xs' | 'sm'>

const functionA = (params: IconSize) => {
}

functionA('xs')
functionA('sm')
functionA('SVO')

////

type EventT = {
    type: 'LOG_IN',
    payload: {
        userId: string;
    }
} | { type: 'SIGN_OUT' }

// tslint:disable-next-line:no-empty
// const sendEvent = (eventType: EventT['type'], payload?: any) => {};

// tslint:disable-next-line:no-empty
const sendEvent = <Type extends EventT['type']>
(...args: Extract<EventT, { type: Type }> extends { payload: infer TPayload } ? [type: Type, payload: TPayload] : [type: Type]) => {
};

sendEvent('LOG_IN', {
    userId: '123'
});
sendEvent('LOG_IN', {
    userId: 123
});

sendEvent('SIGN_OUT')
sendEvent('SIGN_OUT', {})

//////

const obj: Record<string, string[]> = {};

obj.foo?.push('ROFL!')


///

const getDeepValue = <Obj, FirstKey extends keyof Obj, SecondKey extends keyof Obj[FirstKey]>(obj: Obj, firstKey: FirstKey, secondKey: SecondKey): Obj[FirstKey][SecondKey] => {
    return {} as any;
};

const objDepp = {
    foo: {
        a: true,
        b: 2,
    },
    barsuk: {
        c: 'soda',
        d: 2
    }
}

const result = getDeepValue(objDepp, 'barsuk', 'd');


/// OVERLOAD FUNCTION

function compose<Input, FirstArg>
(func: (input: Input) => FirstArg): (input: Input) => FirstArg;

function compose<Input, FirstArg, SecondArg>
(func: (input: Input) => FirstArg,
 func2: (input: FirstArg) => SecondArg
): (input: Input) => SecondArg;

function compose<Input, FirstArg, SecondArg, ThirdArg>
(func: (input: Input) => FirstArg,
 func2: (input: FirstArg) => SecondArg,
 func3: (input: SecondArg) => ThirdArg,
): (input: Input) => ThirdArg;

function compose<Input, FirstArg, SecondArg, ThirdArg, FourArg>
(func: (input: Input) => FirstArg,
 func2: (input: FirstArg) => SecondArg,
 func3: (input: SecondArg) => ThirdArg,
 func4: (input: ThirdArg) => FourArg,
): (input: Input) => FourArg;

function compose(...args: any[]) {
    return {} as any;
}

const addOne = (a: number) => {
    return a + 1;
}

const numToString = (a: number) => {
    return a.toString();
}

const stringToNum = (a: string) => {
    return parseInt(a);
}

const numToBool = (a: number) => {
    return !!a;
}

const addOneToString1 = compose(addOne);
const addOneToString2 = compose(addOne, numToString);
const addOneToString3 = compose(addOne, numToString, stringToNum);
const addOneToString4 = compose(addOne, numToString, stringToNum, numToBool);

/// GET PROPS FROM COMPONENTS

// type PropsFrom<TComponent> = TComponent extends React.FC<infer Props>
//     ? Props
//     : TComponent extends React.Component<infer Props>
//     ? Props
//    : never;

//const props: PropsFrom<AnyReactComponent>;

const myObject = {
    a: 1,
    b: 2,
    c: 3
}

const objectKeys = <Obj extends object>(objective: Obj) => {
    return Object.keys(objective) as (keyof Obj)[];
}

objectKeys(myObject).forEach(key => {
    console.info(myObject[key]);
})