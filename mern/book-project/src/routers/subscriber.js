const express = require('express');
const Subscriber = require('../models/subscriber')
const jwt =require('jsonwebtoken')
const { signup } = require("../controllers/subscriber");
const  {jwtSign } = require('../utility/jwt');
const cors = require("cors")



const router = new express.Router()

router.use(cors())

router.post('/subscribers/signup',cors(), signup)

router.post('/subscribers/signin',cors(), jwtSign) 



module.exports = router;