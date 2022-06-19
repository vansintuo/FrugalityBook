const mongoose = require('mongoose')
const ChecoutSchema = mongoose.Schema(
    {
        userId:[{type:mongoose.Schema.Types.ObjectId,ref: 'users'}],
        bookId:[{type:mongoose.Schema.Types.ObjectId,ref: 'books'}],
        qty:{
            type:Number,
            required:true
        },
        totalPrice:{
            type:Number,
            required:true
        }
        
        
},
{
    timestamps:true, // record specific time and date create or update data
}
);
const Checkout = mongoose.model('checkouts',ChecoutSchema)
module.exports = Checkout; //export to use in index 