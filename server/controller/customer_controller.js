console.log("loading customer_controller");
var mongoose = require('mongoose');
var Customer = mongoose.model('customers');
var catch_errors = function(err){
    res.json({error:err});
};
module.exports = (function() {
    return {
        index:  function(req, res){
            console.log("--> customers index path");
            Customer.find()
            .then(function(results){
                    res.json(results);
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },

        new_customer: function(req, res) {
            console.log("--> new customer via Post path");
            var newCustomer = new Customer({
                name: req.body.name
            });
            newCustomer.save()
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

        remove_customer:  function(req, res){
            console.log("--> remove customer path");
            console.log(req.params);
            Customer.remove({_id: req.params.id})
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
