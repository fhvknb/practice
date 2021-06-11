// 手写 call 函数
Function.prototype.myCall = function (context) {
    // console.log(context);
    // console.log(this);
    context.fn = this;
    // let args = Array.prototype.slice.call(arguments, 1);
    let args = [];

    for (let i = 1; i < arguments.length; i++) {
        // args.push('arguments[' + i + ']');
        args.push(arguments[i]);
    }

    // eval('context.fn(' + args + ')');
    context.fn(...args);
    delete context.fn;
};

const obj = {
    name: 'wang',
};

function testMycall(name) {
    console.log(name);
    console.log(this.name);
}

testMycall.myCall(obj, 'xiang');

console.log('=======')

// 手动bind 函数
Function.prototype.bind2 = function (context) {
    let that = this;
    let args1 = Array.prototype.slice.call(arguments, 1);

    let bindFn = function () {
        let that2 = this instanceof bindFn ? this : context;
        let args2 = Array.prototype.slice.call(arguments);

        let args = args1.concat(args2);
        // console.log(args);

        return that.apply(that2, args);
    };

    bindFn.prototype = Object.create(this.prototype);
    // let Fn = function () {};
    // Fn.prototype = this.prototype;
    // bindFn.prototype = new Fn();

    return bindFn;
};

var one = {
    name: 'Bob',
    say: function(greet) {
        return greet + ',' + this.name
    }
}

var two = {
    name: 'Simith'
}

var twosay1 = one.say.bind2(two);
var twosay2 = one.say.bind2(two, 'DiDaDiDa');

// console.log(one.say('Hello'));

// console.log(one.say.apply(two, ['Hi']));

console.log(twosay1('HaHa'));
console.log(twosay2());




