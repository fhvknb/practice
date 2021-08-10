
function f(resolve, reject) {
    if ( true) {
        resolve();
    }

    reject();
}

let p = new Promise(f);

p.then( res => {
    console.log('/////')
})