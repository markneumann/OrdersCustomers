//basic model
console.log("loading customer_model");
var mongoose = require('mongoose');
//
var CustomerSchema = new mongoose.Schema({
    //define schema here
    name: { type : String, unique : true },
    }, { timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
            }
        }
);

//NameSchema.path('name').required(true, 'Name cannot be blank');

mongoose.model('customers', CustomerSchema);

console.log("exit customer_models");
