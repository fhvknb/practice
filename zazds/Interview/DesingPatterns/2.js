/* 设计模式二　－－　建造者模式 */  
//　又称回调模式　

function getDataByType(type, callback) {

    if(type) {
        let data = fetch({
            method: 'GET',
            url: ''
        });

        callback(data);
    }
}