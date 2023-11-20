const asyncHandler = require('express-async-handler');
const popupModel = require('../models/popupModel');

const createPopup = asyncHandler(async(req , res) => {
    const {popupImage, popupLink} = req.body;
 
    const popup = await popupModel.create({
        popupImage , popupLink
    })
    res.status(200).json(popup);

})


const getPopup = asyncHandler(async(req , res) => {
    const popups = await popupModel.find()
    res.status(200).json(popups);
})

const deletePopup = asyncHandler(async(req , res) => {
    const popup = await popupModel.findById(req.params.id);
    console.log(req.params.id)
    if(!popup){
        res.status(404);
        throw new Error("popup not found");
    }

    await popupModel.deleteOne({_id:req.params.id})
    res.status(200).json(popup);
})


const updatePopup = asyncHandler(async(req , res) => {

    const {popupImage, popupLink} = req.body

    const popup = await popupModel.findById(req.params.id);
    if(!popup){
        res.status(404);
        throw new Error("popup not found")
    }

    const updatedPopup = await popupModel.findByIdAndUpdate(
        req.params.id,
        {popupImage : popupImage,
        popupLink : popupLink}
    )

    res.status(201).json(popup);
})




module.exports = {createPopup , updatePopup , getPopup , deletePopup}