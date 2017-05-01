var deliveryBoy = {
    name: "John",

    handleMessage: function(message, hangler) {
        handler(message);
    },

    receive: function() {
        var that = this;

        this.handleMessage("Hello, ", function(message) {
            that.name //get the proper name

            console.log(message + that.name);
        })
    }
}
deliverBoy.receive();