console.log("loading routes");
//********** RESTful routes ********
var mongoose = require('mongoose');
//var Names = mongoose.model('Name');
var Order = require('../controller/order_controller.js');
var Customer = require('../controller/customer_controller.js');

module.exports = function(app){
    app.get('/orders', Order.index);
    app.post('/orders', Order.new_order);
    app.post('/orders/edit/:id, Order.edit_order');
    // // app.get('/orders/remove/:id', Order.remove_order);
    // // app.get('/orders/show/:id', Order.show_order);
    app.get('/customers', Customer.index);
    app.post('/customers', Customer.new_customer);
    app.get('/customers/remove/:id', Customer.remove_customer);
    // app.get('/customers     /show/:id', Customer.show_customer);
    app.get("*", route404);
};
//********** End routes **************

function route404(req, res) {
    console.log("404 error for " + req.url);
}
