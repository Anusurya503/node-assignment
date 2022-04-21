const express = require('express')
const app = express()
require('dotenv').config()


const cors = require('cors')
const nodemailer = require('nodemailer')


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('oh it worked!')
})

app.post('/sendEmail', cors(), async (req, res)=> {
    let { text } = req.body;
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth:{
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
    })

    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: "blah@gmail.com",
        subject: "confirmation",
        html:`<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
        ">
        <h2>tan tanaaa your mail is here !!!<h2>
        <p>${text}</p>
        <p>you are on your own, Anusurya</p>
        </div>
        `
    })


})

app.listen(4000, ()=>{
    console.log('server is listening on port 4000')
})