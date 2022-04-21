const express = require('express');
const Subscriber = require('../models/subscriber')
const jwt =require('jsonwebtoken')
const { signup } = require("../controllers/subscriber");
const  {jwtSign } = require('../utility/jwt');


const router = new express.Router()


router.post('/subscribers/signup', signup)

router.post('/subscribers/signin', jwtSign) 



module.exports = router;