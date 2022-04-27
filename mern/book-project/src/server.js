const express = require('express');
require('./db/mongoose')
require('express-async-errors')
const app = express();
const jwt = require('jsonwebtoken');


const port = 4000;


const Subscriber = require('./models/subscriber')
const subscriberRouter = require('./routers/subscriber')
const bookRouter = require('./routers/book')


app.use(express.json());

app.use(subscriberRouter)
app.use(bookRouter);

app.get('/', (req, res) => {
    res.json({msg:'welcome!'})
})

app.get('/api', (req, res) => {
    res.json({msg:'API'})
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})
