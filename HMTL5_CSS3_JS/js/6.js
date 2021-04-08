/* 
观察者模式
*/

var pubsub = {};
(function (q) {
  var topics = {}, // 回调函数存放的数组
    subUid = -1;
  // 发布方法
  q.publish = function (topic, args) {
    if (!topics[topic]) {
      return false;
    }

    setTimeout(function () {
      var subscribers = topics[topic];
      var len = subscribers ? subscribers.length : 0;
      while (len--) {
        subscribers[len].func(topic, args);
      }
    }, 0);

    return true;
  };
  //订阅方法
  q.subscribe = function (topic, func) {
    if (!topics[topic]) {
      topics[topic] = [];
    }

    var token = (++subUid).toString();
    topics[topic].push({
      token: token,
      func: func,
    });
    return token;
  };
  //退订方法
  q.unsubscribe = function (token) {
    for (var m in topics) {
      if (topics[m]) {
        for (var i = 0, j = topics[m].length; i < j; i++) {
          if (topics[m][i].token === token) {
            topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
    return false;
  };
})(pubsub);

//来，订阅一个
pubsub.subscribe("example1", function (topics, data) {
  console.log(topics + ": " + data);
});

//发布通知
// pubsub.publish("example1", "hello world!");
// pubsub.publish("example1", "hello world1!");
// pubsub.publish("example1", "hello world2!");

// setTimeout(() => {
//   pubsub.publish("example1", "hello world3!");
// }, 2000);

// pubsub.publish('example1', ['test', 'a', 'b', 'c']);
// pubsub.publish('example1', [{ 'color': 'blue' }, { 'text': 'hello'}]);

function Observer() {
  this.fns = [];
}
Observer.prototype = {
  subscribe: function (fn) {
    this.fns.push(fn);
  },
  unsubscribe: function (fn) {
    this.fns = this.fns.filter(function (el) {
      if (el !== fn) {
        return el;
      }
    });
  },
  update: function (o, thisObj) {
    var scope = thisObj || window;

    console.log(scope);

    this.fns.forEach(function (el) {
      el.call(scope, o);
    });
  },
};

//测试
var o = new Observer();

var f1 = function (data) {
  console.log("Robbin: " + data + ", 赶紧干活了！");
};

var f2 = function (data) {
  console.log("Randall: " + data + ", 找他加点工资去！");
};

o.subscribe(f1);
o.subscribe(f2);
// o.subscribe(f2);

o.update("Tom回来了！");

//退订f1
// o.unsubscribe(f1);
//再来验证
// o.update("Tom回来了！");
