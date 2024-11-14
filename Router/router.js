const express = require('express')
const bookController = require('../Controller/bookController')
const router = express.Router()

router.post(`/addBook` ,bookController.addBook)
router.get(`/addBook` ,bookController.getBooks)
router.delete(`/addBook/:id` ,bookController.deleteBook)
router.put(`/addBook/:id` ,bookController.updateBook)


module.exports= router