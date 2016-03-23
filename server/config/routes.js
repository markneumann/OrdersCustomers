console.log("loading routes");
//********** RESTful routes ********
var mongoose = require('mongoose');
//var Names = mongoose.model('Name');
var API = require('../controller/API_controller.js');

module.exports = function(app){
    app.get('/names', API.index);
    app.get('/names/new/:name', API.new_name);
    app.get('/names/remove/:id', API.remove_name);
    app.get('/names/show/:id', API.show_name);
    app.get("*", route404);
};
//********** End routes **************

function route404(req, res) {
    console.log("404 error for " + req.url);
}
