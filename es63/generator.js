function* greet() {
    console.log(`You called 'next()'`);
    yield "hello";
}

let greeter = greet();
console.log(greeter);
let next = greeter.next();
console.log(next);
let done = greeter.next();
console.log(done);



//------------
function* greet() {
    let friendly = yield "How";
    friendly = yield friendly + "are";
    yield friendly + "you?";
}

var greeter = greet();
console.log(greeter.next("first").value);
console.log(greeter.next(" the heck ").value);
console.log(greeter.next(" silly ol'").value);

//-----------
function* graph() {
    let x = 0;
    let y = 0;
    while (true) {
        yield { x: x, y: y }
        x += 2;
        y += 1;
    }
}


var graphGenerator = graph();
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);