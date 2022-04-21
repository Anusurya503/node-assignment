const express = require('express')
const Book = require('../models/book')
const upload = require('../utility/storage')
const { getBook, addBook, getSpecificBook, deleteBook, updateBook } = 
require("../controllers/book")
const { jwtVerify } = require('../utility/jwt')
const router = new express.Router()




router.get("/books", jwtVerify, getBook);


router.post("/books", jwtVerify, upload ,addBook);

router.get("/books/:id", jwtVerify, getSpecificBook);

router.delete("/books/:id", jwtVerify, deleteBook);

router.patch('/books/:id', jwtVerify, upload ,updateBook);


module.exports = router
