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



var SingleInstance = (function(){
    var instance;
    function init() {
        return {
            publiceMethod: () => {},
            publiceProperty: 'test'
        }
    }

    return {
        getInstance: function() {

            if(!instance) {
                instance = init();
            }else {
                return instance;
            }
        }
    }
})()



