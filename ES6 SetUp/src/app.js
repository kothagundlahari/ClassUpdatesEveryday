var createGreeting = function(message, name) {
    return message + name;
}

var arrowGreeting = (message, name) => message + name;

var b = arrowGreeting("hi", "hari");
console.log(b);
var squared = x => x * x;
console.log(squared(5));