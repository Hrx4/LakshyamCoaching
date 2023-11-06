const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    
    paymentId: {
        type: String,
        required: [true, "Please add the Title"],
    },
    paymentDetails: {
        type: [
            new mongoose.Schema({
                paymentMonth : {type:String },
                paymentMoney: {type:Number },
                paymentType:{type:String},
                paymentDate: {type:String }
            })
        ],

    }
    
    
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("payment" , paymentSchema)