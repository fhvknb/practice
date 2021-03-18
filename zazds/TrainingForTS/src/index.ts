
import calc from './calc';
let printMessage = (msg: string):void  =>  console.log(`Message: ${msg}.`);

console.clear();


console.log('hello world!');
printMessage('This is a message!');
printMessage('Today is a wonderful day!');
let data = new Map();

data.set("Alice","ChongQing");
data.set("Bob", 'ShenZhen');
data.forEach( (val, key) => console.log(`${key} lives ${val}.`));
let calcResult = calc(1,2,3,4,5,6,7,8,9);
console.log('Result: ' + calcResult);

interface Cat {
    [propName: string]: any
}

let newCat:Cat = {
    name: 'x',
    age: 12,
    height: 1000
}
