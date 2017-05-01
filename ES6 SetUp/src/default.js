function greet(greeting, name) {
    console.log(greeting + ", " + name);
}

greet();

function greet(greeting, name = "John") {
    console.log(greeting + ", " + name);
}

greet("Hello");

function greet(greeting, name = "John") {
    console.log(greeting + ", " + name);
}

greet("Hello", "Bill");



function receive(complete) {
    complete();
}

receive(function() {
    console.log("complete");
});

function receive(complete = () => console.log("complete")) {
    complete();
}

receive();

// let receive = (complete = () => console.log("complete")) => complete();

receive();