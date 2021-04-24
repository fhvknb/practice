// 手写 call 函数
Function.prototype.myCall = function (context) {
    // console.log(context);
    // console.log(this);
    context.fn = this;
    // let args = Array.prototype.slice.call(arguments, 1);
    let args = [];

    for (let i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }

    // console.log(args);
    context.fn;
    eval('context.fn(' + args + ')');
    delete context.fn;
};

const obj = {
    name2: 'wang',
};

function testMycall(name) {
    console.log(name);
    console.log(this.name2);
}

// testMycall.myCall(obj, 'xiang');

// 手动bind 函数
Function.prototype.bind2 = function (context) {
    let that = this;
    let args1 = Array.prototype.slice.call(arguments, 1);

    let bindFn = function () {
        let that2 = this instanceof bindFn ? this : context;
        let args2 = Array.prototype.slice.call(arguments);

        let args = args1.concat(args2);
        console.log(args);

        that.apply(that2, args);
    };

    bindFn.prototype = Object.create(this.prototype);
    // let Fn = function () {};
    // Fn.prototype = this.prototype;
    // bindFn.prototype = new Fn();

    return bindFn;
};

function fn1(s) {
    this.b = 1;
}

function fn2(s) {
    this.a = '2';
    console.log(this);
    console.log(this.prototype);
}

// var t = fn2.bind(fn1, 'test');

var t2 = fn2.bind2(fn1, 'test');

// console.log(t());
t2('xx');
console.log(t2.prototype);
