function getDateList() {
    let startTime = new Date('2020', '01', '01').getTime();
    let currentTime = getCurrentTime().seconds;
    let list = [currentTime];
    for (let i = 1; i < 7; i++) {
        list.push(currentTime - i * 86400000);
    }
    let newList = list.filter((item, idx) => item >= startTime);
    let result = [];
    for (let j = 0; j < newList.length; j++) {
        result.push(formatTime(newList[j]));
    }
    return result;
}
function addZero(val) {
    if (+val > 9) {
        return val + '';
    } else {
        return '0' + val;
    }
}
function getCurrentTime() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let date = currentDate.getDate();

    let wordTime = year + '年' + month + '月' + date + '日';
    let numTime = year + addZero(month) + addZero(date);
    let seconds = new Date(year, month - 1, date).getTime();

    return {
        wordTime,
        numTime,
        seconds,
    };
}
function formatTime(timestamp) {
    let time = new Date(timestamp);
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();

    let wordTime = year + '年' + month + '月' + date + '日';
    let numTime = year + addZero(month) + addZero(date);
    let seconds = timestamp;

    return {
        wordTime,
        numTime,
        seconds,
    };
}

function isFromWeiXin() {
    var ua = navigator.userAgent.toLocaleLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        console.log('sss');
        return true;
    } else {
        return false;
    }
}

function getDate(numTime) {
    let year = numTime.substr(0, 4);
    let month = numTime.substr(4, 2) - 1;
    let date = numTime.substr(6, 2);

    return new Date(year, month, date);
}
function detectPlatform() {
    var equipmentType = '';

    var agent = navigator.userAgent.toLowerCase();

    var android = agent.indexOf('android');

    var iphone = agent.indexOf('iphone');

    var ipad = agent.indexOf('ipad');

    if (android != -1) {
        equipmentType = 'android';
    }

    if (iphone != -1 || ipad != -1) {
        equipmentType = 'ios';
    }

    return equipmentType;
}
export {
    getDateList,
    getCurrentTime,
    formatTime,
    getDate,
    isFromWeiXin,
    detectPlatform,
};
