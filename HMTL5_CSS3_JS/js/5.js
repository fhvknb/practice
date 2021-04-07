var Gadget = (function () {
  // 静态变量/属性
  var counter = 0;

  // 闭包返回构造函数的新实现
  return function () {
    console.log((counter += 1));
  };
})(); // 立即执行

// var g1 = new Gadget(); // logs 1
// var g2 = new Gadget(); // logs 2
// var g3 = new Gadget(); // logs 3

function curry(func, minArgs) {
  if (minArgs == undefined) {
    minArgs = 1;
  }

  function funcWithArgsFrozen(frozenargs) {
    return function () {
      // 优化处理，如果调用时没有参数，返回该函数本身
      var args = Array.prototype.slice.call(arguments);
      var newArgs = frozenargs.concat(args);
      console.log(newArgs);
      if (newArgs.length >= minArgs) {
        return func.apply(this, newArgs);
      } else {
        return funcWithArgsFrozen(newArgs);
      }
    };
  }

  return funcWithArgsFrozen([]);
}

var plus = curry(function () {
  var result = 0;
  for (var i = 0; i < arguments.length; ++i) {
    result += arguments[i];
  }
  return result;
}, 2);

console.log(plus(3)()()(3));
