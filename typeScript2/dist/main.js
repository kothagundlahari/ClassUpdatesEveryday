"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var App = (function () {
    function App() {
        this.title = "hari the great";
    }
    App.prototype.getUsers = function () {
        return [{ name: "just another name" }];
    };
    return App;
}());
console.log(_.isArray(((new App).getUsers())));
