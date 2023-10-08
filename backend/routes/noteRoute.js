const express = require('express');
const { createNote, getFilterNotes, updateNote, deleteNote,getNote } = require('../controllers/noteControllers');

const router= express.Router()

router.route('/').post(createNote).get(getNote);
router.route('/tutorial').post(getFilterNotes)
router.route('/:id').delete(deleteNote).put(updateNote);




module.exports = router