/* 装饰者模式 */

//  为已有功能函数添加新的方法
 
function ConcreteClass() {
    this.performTask = function () {
        this.preTask();
        console.log('doing something');
        this.postTask();
    };
}

function AbstractDecorator(decorated) {
    this.performTask = function () {
        decorated.performTask();
    };
}

function ConcreteDecoratorClass(decorated) {
    this.base = AbstractDecorator;
    this.base(decorated);

    decorated.preTask = function () {
        console.log('pre-calling..');
    };

    decorated.postTask = function () {
        console.log('post-calling..');
    };

}

var concrete = new ConcreteClass();
var decorator1 = new ConcreteDecoratorClass(concrete);
// var decorator2 = new ConcreteDecoratorClass(decorator1);

decorator1.performTask();


