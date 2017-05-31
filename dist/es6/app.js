"use strict";

var deliveryBoy = {
    name: "John",

    handleMessage: function handleMessage(message, handler) {
        handler(message);
    },

    receive: function receive() {
        var _this = this;

        this.handleMessage("Hello, ", function (message) {
            return console.log(message + _this.name);
        });
    }
};

deliveryBoy.receive();
//# sourceMappingURL=app.js.map