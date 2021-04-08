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

// console.log(plus(3)()()(3));

var scareMe = function () {
  alert("Boo!");
  scareMe = function () {
    alert("Double boo!");
  };
};

// 1. 添加新属性
scareMe.property = "properly";
// 2. scareMe赋与一个新值
var prank = scareMe;
// 3. 作为一个方法调用
var spooky = {
  boo: scareMe,
};


// 使用新变量名称进行调用
// prank(); // "Boo!"
// prank(); // "Boo!"
// console.log(scareMe.property); // undefined


// console.log(prank)
// console.log(scareMe)
// console.log(spooky.boo)

// console.log(prank.property); // "properly"
// // 使用方法进行调用
spooky.boo(); // "Boo!"
spooky.boo(); // "Boo!"
console.log(spooky.boo.property); // "properly"

// scareMe(); //  boo!
// scareMe(); // Double boo!
// console.log(scareMe.property); // undefined
