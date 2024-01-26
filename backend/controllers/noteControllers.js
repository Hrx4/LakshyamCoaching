const noteModels = require('../models/noteModels');
const asyncHandler = require('express-async-handler');

const createNote = asyncHandler(async(req , res) => {
    const {noteTitle , noteSubject , noteClass , noteBatch , noteImage , notePdf, noteCourse} = req.body;
 
    const note = await noteModels.create({
        noteTitle , noteSubject , noteClass , noteBatch , noteImage , notePdf, noteCourse
    })
    res.status(200).json(note);

})

const getNote = asyncHandler(async(req,res)=>{
    let notes = await noteModels.find();
    notes = notes.slice(0,10)
    res.status(200).json(notes)
})

const getFilterNotes = asyncHandler(async(req , res) => {
    const {noteClass , noteSubject , noteCourse , noteBatch} = req.body
    let notes = await noteModels.find()

    if (noteClass !== "") {
        notes = notes.filter((item) => item.noteClass === noteClass);
        
      }
    
      if (noteSubject !== "") {
        notes = notes.filter((item) => item.noteSubject === noteSubject);
      }
      if (noteCourse !== "")
        notes = notes.filter((item) => item.noteCourse === noteCourse);
        if (noteBatch !== "")
        notes = notes.filter((item) => item.noteBatch === noteBatch);

    res.status(200).json(notes);
    console.log('====================================');
    console.log(notes);
    console.log('====================================');
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




module.exports = {createNote , getFilterNotes,getNote  , deleteNote , updateNote}