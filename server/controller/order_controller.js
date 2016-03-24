console.log("loading order_controller");
var mongoose = require('mongoose');
var Order = mongoose.model('orders');
var catch_errors = function(err){
    res.json({error:err});
};
module.exports = (function() {
    return {
        index:  function(req, res){
            console.log("--> orders index path");
            Order.find()
            .then(function(results){
                    res.json(results);
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },

        new_order: function(req, res) {
            console.log("--> new order path");
            console.log("req.body =", req.body);
            var newOrder = new Order({
                name: req.body.name,
                product:  req.body.product,
                quantity: req.body.quantity
            });
            newOrder.save()
            .then(function() {
                console.log("return 200");
                res.status(200); // send back http 200 status if successful
                res.json({success: true});
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },

        // remove_order:  function(req, res){
        //     console.log("--> remove order path");
        //     console.log(req.params);
        //     Order.remove({_id: req.params.id}, function(err, orders) {
        //         if(err) {
        //             console.log(err);
        //             //res.render('errors', {title: 'you have errors!', errors: name.errors});
        //         } else {
        //             res.redirect('/orders');
        //         }
        //     });
        // },

        // NOT NEEDED AT THIS TIME
        // show_name:  function(req, res){
        //     console.log("--> show path");
        //     console.log(req.params);
        //     Name.find({_id: req.params.id}, function(err, customers) {
        //         if(err) {
        //             console.log(err);
        //             res.render('errors', {title: 'you have errors!', errors: name.errors});
        //         } else {
        //             res.json({names: names}); //<-- think we change this
        //         }
        //     });
        // },
    };
})(); //returns object
