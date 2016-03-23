console.log("loading API_controller");
var mongoose = require('mongoose');
var Name = mongoose.model('names');
var catch_errors = function(err){
    res.json({error:err});
};
module.exports = (function() {
    return {
        index:  function(req, res){
            console.log("--> index path");
            Name.find({}, function(err, names) {
                if(err) {
                    console.log(err);
                } else {
                    res.json(names);
                }
            });
        },

        new_name: function(req, res) {
            console.log("--> new name path");
            var newName = new Name({name: req.params.name});
            newName.save(function(err){
                if(err) {
                    console.log("name save error");
                    console.log(err);
                    //res.json('you have errors!', errors: newName.errors});
                } else {
                    res.redirect('/');
                }
            });
        },

        remove_name:  function(req, res){
            console.log("--> remove path");
            console.log(req.params);
            Name.remove({_id: req.params.id}, function(err, names) {
                if(err) {
                    console.log(err);
                    //res.render('errors', {title: 'you have errors!', errors: name.errors});
                } else {
                    res.redirect('/');
                }
            });
        },

        show_name:  function(req, res){
            console.log("--> show path");
            console.log(req.params);
            Name.find({_id: req.params.id}, function(err, names) {
                if(err) {
                    console.log(err);
                    res.render('errors', {title: 'you have errors!', errors: name.errors});
                } else {
                    res.json({names: names});
                }
            });
        },
    };
})(); //returns object
