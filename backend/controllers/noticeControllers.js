const asyncHandler = require('express-async-handler');
const noticeModels = require('../models/noticeModels');

const createNotice = asyncHandler(async(req , res) => {
    const {noticeTitle , noticeDetails , noticeLink} = req.body;
 
    const notice = await noticeModels.create({
        noticeTitle , noticeDetails , noticeLink
    })
    res.status(200).json(notice);

})


const getNotice = asyncHandler(async(req , res) => {
    const notices = await noticeModels.find()
    res.status(200).json(notices);
})

const deleteNotice = asyncHandler(async(req , res) => {
    const notice = await noticeModels.findById(req.params.id);
    console.log(req.params.id)
    if(!notice){
        res.status(404);
        throw new Error("notice not found");
    }

    await noticeModels.deleteOne({_id:req.params.id})
    res.status(200).json(notice);
})


const updateNotice = asyncHandler(async(req , res) => {

    const {noticeTitle , noticeDetails , noticeLink} = req.body

    const notice = await noticeModels.findById(req.params.id);
    if(!notice){
        res.status(404);
        throw new Error("notice not found")
    }

    const updatedNotice = await noticeModels.findByIdAndUpdate(
        req.params.id,
        {
            noticeTitle : noticeTitle , 
            noticeDetails : noticeDetails,
            noticeLink : noticeLink
        }
    )

    res.status(201).json(notice);
})




module.exports = {createNotice , deleteNotice , updateNotice , getNotice}