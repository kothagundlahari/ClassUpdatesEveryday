//Promises with ES6(2015)...

var d = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('hello world');
        } else {
            reject('no bueno');
        }
    }, 500);
});

d.then((data) => {
    console.log('success : ', data);
    return 'foo bar';
}).
then((data) => {
    console.log('success 2 : ', data);
}).
catch((error) => console.error('error : ', error));