const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const subscriberSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true,
        trim: true,
    },
    email:{
        type: 'string',
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email')
            }
        }
    },
    password:{
        type: 'string',
        required: true,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Invalid password')
            }
        }
    }

})





//encrypt text before saving
subscriberSchema.pre('save', async function (next){
    const subscriber = this

    if(subscriber.isModified('password')){
        subscriber.password = await bcrypt.hash(subscriber.password, 8)
    }

    next()
})

const Subscriber = mongoose.model('Subscriber',subscriberSchema)

module.exports = Subscriber

