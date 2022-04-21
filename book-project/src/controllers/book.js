const Book = require('../models/book')

exports.getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.send("Error " + err);
    }
};

exports.addBook = async (req, res) => {
    try {
        const newBook = new Book({
            name:req.body.name,
            description:req.body.description,
            author:req.body.author,
            price:req.body.price,
            image:req.file.filename,
        })
      await newBook.save()
        res.json(newBook);
    } catch (err) {
        res.send("Error " + err);
    }
};

exports.getSpecificBook = async (req, res) => {
    try {
        const book = await Book.findById({ _id: req.params.id });
        res.json(book);
    } catch (error) {
        res.sendStatus(Message.INTERNAL_SERVER_ERROR)
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const result = await Book.findByIdAndDelete({ _id: req.params.id });
        res.json(result);
    } catch (error) {
        res.send(`error: ${error}`);
    }
};

exports.updateBook = async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'description', 'author', 'price']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.sendStatus(message.bad_request)
    }

    try {

        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!book) {
            return res.sendStatus(message.not_found)
        }
        res.send(book)
    } catch (error) {
        res.sendStatus(message.bad_request)
    }
};