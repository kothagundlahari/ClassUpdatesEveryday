var message = "hi";

{
    var message = "bye";
}

console.log(message)

var message = "hi";

function greet() {
    var message = "bye";
    console.log(message);
}
greet();

//var message = "bye";
console.log(message); // hi