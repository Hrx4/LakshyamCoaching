const mongoose = require('mongoose')

const noticeSchema = mongoose.Schema({
    
    noticeTitle: {
        type: String,
        required: [true, "Please add the Title"],
    },
    noticeDetails: {
        type: String,
    },
    noticeLink: {
        type: String,
    },
    
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("notice" , noticeSchema)