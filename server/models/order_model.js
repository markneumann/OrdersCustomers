//basic model
console.log("loading order_model");
var mongoose = require('mongoose');
//
var OrderSchema = new mongoose.Schema({
    //define schema here
    product: String,
    quantity: Number,
    }, { timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
            }
       }
);

//NameSchema.path('name').required(true, 'Name cannot be blank');

mongoose.model('orders', OrderSchema);

console.log("exit order_model");
