const mongoose = require('mongoose')

const popupModel = mongoose.Schema({
    
    popupImage: {
        type: String,
        required: [true, "Please add the Image"],
    },
    
    popupLink: {
        type: String,
    },
    
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("popup" , popupModel)