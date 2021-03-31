export function isObjectValueEqual(a, b) {
  let aProps = Object.getOwnPropertyNames(a);
  let bProps = Object.getOwnPropertyNames(b);

  //   console.log(Reflect.ownKeys(a));

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i];
    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  return true;
}

export function getUrlParams(query) {
  /* 
        @params query  string  '?key=value'
    */

  return new URLSearchParams(query);
}

export function throttle(fn = {}, wait = 0) {
  let prev = new Date();
  return function () {
    const args = arguments;
    const now = new Date();
    if (now - prev > wait) {
      fn.apply(this, args);
      prev = new Date();
    }
  };
}

export function formatDate(date, formate) {
  //YYYYMMDD return YYYY-MM-DD
  if (date && date.length === 8) {
    return date.replace(/(\d{4})(\d{2})(\d{2})/, `$1${formate}$2${formate}$3`);
  } else {
    return date;
  }
}

export const isIOS = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);

export const isAndroid = /(Android)/i.test(navigator.userAgent);

export const isWechat = /micromessenger/i.test(navigator.userAgent);

export const isInsideAPP = /CustomUserAgent_C_/i.test(navigator.userAgent);
