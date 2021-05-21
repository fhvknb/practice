
// import calc from './calc';

// let printMessage = (msg: string): void => console.log(`Message: ${msg}.`);

console.clear();


// console.log('hello typescript!');
// printMessage('This is a message!');
// printMessage('Today is a wonderful day!');
// let data = new Map();

// data.set("Alice", "ChongQing");
// data.set("Bob", 'ShenZhen');
// data.forEach((val, key) => console.log(`${key} lives ${val}.`));

// let calcResult = calc(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log('Result: ' + calcResult);


// interface Cat {
//     [propName: string]: any
// }

// let newCat: Cat = {
//     name: 'x',
//     age: 12,
//     height: 1000
// }

// console.log(newCat)


function identity<T>(arg: T): T {
    return arg;
}

// let myIdenttity:<T>(arg:T) => T = identity;


interface GenericIdentityFn {
    <T>(arg: T): T;
}

let myIdenttity: GenericIdentityFn = identity;

console.log(myIdenttity('xiang haha'));


// enum Direction {
//     UP,
//     RIGHT,
//     DOWN,
//     LEFT
// }

// console.log(Direction.UP);
// console.log(Direction.RIGHT);
// console.log(Direction.DOWN);
// console.log(Direction.LEFT);



/* 反射映射 */
// enum Enum {
//     A
// };
// let a = Enum.A;
// let nameOfA = Enum[a];

// console.log(a);
// console.log(nameOfA);

// enum Enum {
//     A = 1,
//     B,
//     C = 2
// }

// console.log(Enum.B);
// console.log(Enum.C);
// console.log(Enum.B == Enum.C);

type name = 'xiang' | 'zhang' | 'wang';

interface NameType {
    name: any
}

var n1: name = 'wang';
var n2: NameType = { name: 'wang' };

/* ========================== */
interface User {
    name: string,
    age: number,
    getName: () => string,
    getAge: () => number
} // 如何得到 'getName' | 'getAge' ？ 


// type GetKeyByValueType<T, Condition> = {
//     [K in keyof T]: T[K] extends Condition ? K : never
// }[keyof T];

type GetKeyByValueType<T, Condition> = {
    [K in keyof T]: T[K] extends Condition ? K : never
}[keyof T];

type FunctionPropNames = GetKeyByValueType<User, Function>;


const AUser: User = {
    name: 'xiang',
    age: 28,
    getName: () => 'xiang',
    getAge: () => 28
}

const getFunction = (func: FunctionPropNames) => {
    let res = AUser[func]();
    console.log(res);
}

let funName: FunctionPropNames = 'getName';
let funName2: FunctionPropNames = 'getAge';

getFunction('getName')


// 将一个map所有属性变为可选的
type Partial1<T> = { [P in keyof T]?: T[P] }
// 将一个map所有属性变为必选的
type Required1<T> = { [P in keyof T]-?: T[P] }
// 将一个map所有属性变为只读的
type Readonly1<T> = { readonly [P in keyof T]: T[P] }
// ts标准库未包含，将一个map所有属性变为可写的
type Mutable<T> = { -readonly [P in keyof T]: T[P] }

// 将 K 中所有的属性的值转化为 T 类型
type myRecord<K extends keyof any, T> = { [P in K]: T };

// 从 T 中取出 一系列 K 的属性
type myPick<T, K extends keyof T> = { [P in K]: T[P] };

// 如果 T 是 U 的子类型的话，那么就会T
type myExclude<T, U> = T extends U ? never : T;

// 提取出 T 包含在 U 中的元素
type myExtract<T, U> = T extends U ? T : never;




