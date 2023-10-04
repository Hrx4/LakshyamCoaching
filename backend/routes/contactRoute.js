const express = require('express');
const { createContact, getContact, deleteContact, updateContact } = require('../controllers/contactControllers');

const router= express.Router()

router.route('/').post(createContact).get(getContact);
router.route('/:id').delete(deleteContact).put(updateContact);


module.exports = router