//basic model
console.log("loading API_model");
var mongoose = require('mongoose');
//
var NameSchema = new mongoose.Schema({
    //define schema here
    name: String
});

//NameSchema.path('name').required(true, 'Name cannot be blank');

mongoose.model('names', NameSchema);

console.log("exit API_models");
