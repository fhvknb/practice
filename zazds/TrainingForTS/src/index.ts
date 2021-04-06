
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






