function letFunc(){
    let previous = 0;
    let current = 1;

    for(let i = 0; i < 10; i+=1){
        let temp = previous;
        previous = current;
        current = temp + current;
    }
};

letFunc();

console.log('let func loaded');
console.log('let func loaded');
