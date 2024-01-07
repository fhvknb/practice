/* 

js 怪异表达示搜集

*/

// 1. 该方法不会正确返回 因为js会自动添加分号

/* 
function test() {
  return
  {
    a: 1;
  }
}

var f = test();
console.log(f.a);
 */

// 该方法执行结果 --> 只会打打印1  需要手动添加分号
(function () {
  alert(1);
})()(function () {
  alert(2);
})()(function () {
  var a;
  a = 20;
  var b = (c = a);

  console.log(c);
})();
