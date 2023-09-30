const noteModels = require('../models/noteModels');
const asyncHandler = require('express-async-handler');

const createNote = asyncHandler(async(req , res) => {
    const {noteTitle , noteSubject , noteClass , noteBatch , noteImage , notePdf, noteCourse} = req.body;
 
    const note = await noteModels.create({
        noteTitle , noteSubject , noteClass , noteBatch , noteImage , notePdf, noteCourse
    })
    res.status(200).json(note);

})


const getNote = asyncHandler(async(req , res) => {
    const notes = await noteModels.find()
    res.status(200).json(notes);
})

const deleteNote = asyncHandler(async(req , res) => {
    const note = await noteModels.findById(req.params.id);
    console.log(req.params.id)
    if(!note){
        res.status(404);
        throw new Error("Contact not found");
    }

    await noteModels.deleteOne({_id:req.params.id})
    res.status(200).json(note);
})


const updateNote = asyncHandler(async(req , res) => {

    const {noteTitle , noteSubject , noteClass , noteBatch , noteImage , notePdf, noteCourse} = req.body

    const note = await noteModels.findById(req.params.id);
    if(!note){
        res.status(404);
        throw new Error("Contact not found")
    }

    const updatedNote = await noteModels.findByIdAndUpdate(
        req.params.id,
        {
            noteTitle :noteTitle,
            noteSubject :noteSubject,
            noteClass:noteClass ,
            noteBatch :noteBatch,
            noteImage:noteImage ,
            notePdf: notePdf ,
            noteCourse: noteCourse
        }
    )

    res.status(201).json(note);
})




module.exports = {createNote , getNote  , deleteNote , updateNote}