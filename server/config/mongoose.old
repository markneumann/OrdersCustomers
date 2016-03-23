// require mongoose.js
console.log("loading mongoose.js");
var mongoose = require('mongoose');
// require the fs module for loading model files
var fs = require('fs');
//require path for getting the models path
var path = require('path');
// connect to mongoose
try {
    mongoose.connect('mongodb://localhost/API');
    console.log("mongo connected");
} catch(err) {
    console.log("mongodb connect error =" + err);
}

// path to models
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require each
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >=0) {
        console.log("model file =" + file);
        require(models_path + '/' + file);
    }
});
