function isWechatPlatform() {
    var ua = window.navigator.userAgent.toLocaleLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

/* 判断是否是android Or IOS 平台 */
function confirmPlatform() {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        //判断iPhone|iPad|iPod|iOS
        //alert(navigator.userAgent);
        return 'ios';
    } else if (/(Android)/i.test(navigator.userAgent)) {
        //判断Android
        //alert(navigator.userAgent);
        return 'android';
    } else {
        //pc
        return 'pc';
    }
}

export { isWechatPlatform, confirmPlatform };
