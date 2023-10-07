const express = require('express');
const { createNote, getNote, updateNote, deleteNote } = require('../controllers/noteControllers');

const router= express.Router()

router.route('/').post(createNote);
router.route('/tutorial').post(getNote)
router.route('/:id').delete(deleteNote).put(updateNote);




module.exports = router