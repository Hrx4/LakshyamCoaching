const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    
    paymentId: {
        type: String,
        required: [true, "Please add the Title"],
    },
    paymentDetails: {
        type: [
            new mongoose.Schema({
                paymentMonth : {type:String},
                paymentMoney: {type:String},
                paymentDate: {timestamps:true}
            })
        ],

    }
    
    
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("payment" , paymentSchema)