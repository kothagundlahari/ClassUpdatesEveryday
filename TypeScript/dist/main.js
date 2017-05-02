"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var two_1 = require("./two");
var App = (function () {
    function App() {
        console.log("I am from main");
    }
    return App;
}());
new App();
new two_1.Two();
