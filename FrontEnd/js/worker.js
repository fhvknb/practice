/* 

Web Workers API

*/

var myWorker = new Worker("worker.js");

myWorker.postMessage({ isGetData: true });

myWorker.onmessage = (e) => {
  console.log(e.data);
};

console.log("页面加载完毕");


console.log("1111");

