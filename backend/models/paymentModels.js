const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    
    paymentId: {
        type: String,
        required: [true, "Please add the Title"],
    },
    studentCourse: {
        type: String,
        required: [true, "Please add the Course"],
    },
    studentSubjects: {
        type: [],
        required: [true, "Please add the Subjects"],
    },    
    paymentMoney: {type:Number },
    paymentType: {type:String },
    totalIncome : {type:Number},
    lastIncomeMonth: {type:Number},
    lastIncomeMoney: {type:Number},

    paymentDetails: {
        type: [
            new mongoose.Schema({
                paymentMonth : {type:String },
                paymentMoney:{type:Number},
                paymentYear:{type:String},
                paidMonth : {type:String },
                paidYear:{type:String},
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