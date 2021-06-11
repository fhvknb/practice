/*　设计模式1－－单例模式 */

// 实现方式一

// var singleInstance = {
//     property1: '1',
//     property2: '2',
//     method1: function() {
//         //
//     }
// }

// var singleInstance =  function() {


//     var privateName = 'name';
//     var alterName = function() {
//         console.log(privateName)
//     }


//     return {
//         publiceFunction: () => {    
//             alterName();
//         },
//         publiceName: 'xxxx'
//     }
// }

// var single = singleInstance();



// var SingleInstance = (function(){
//     var instance;
//     function init() {
//         return {
//             publiceMethod: () => {},
//             publiceProperty: 'test'
//         }
//     }

//     return {
//         getInstance: function() {

//             if(!instance) {
//                 instance = init();
//             }else {
//                 return instance;
//             }
//         }
//     }
// })();


// function Universe() {
//     var instance = this;

//     this.start_time = 0;
//     this.name = 'Bob';

//     Universe = function() {
//         return instance;
//     }
// }


// function Universe() {
//     var instance;

//     Universe = function() {
//         return instance;
//     }

//     Universe.prototype = this;

//     instance = new Universe();

//     instance.constructor = Universe;

//     instance.start_time = 0;
//     instance.name = 'Bob';

//     return instance;
// }

var Universe;

void (function(){
    var instance;

    Universe = function Universe() {

        if(instance) {
            return instance;
        }

        instance = this;

        this.start_time = 0;
        this.name = 'Bob';
    }


})()




Universe.prototype.isGood = true;

var uni1 = new Universe();
// console.log(uni1.isGood);

Universe.prototype.isHaa = 'HaHa';
var uni2 = new Universe();
console.log(uni2.isGood);

console.log(uni1.isHaa);
console.log(uni2.isHaa);

// console.log(uni1 === uni2);









