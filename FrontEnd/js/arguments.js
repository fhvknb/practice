/* 

arguments.length  实参数
fun.length  形参数

*/

function test(f) {
  console.log(test.length);
  console.log(arguments.length);
  let arg = Array.prototype.slice.call(arguments, 1);
  console.log(arg);
}

test();
