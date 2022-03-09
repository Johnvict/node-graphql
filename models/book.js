const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    name: String,
    genre: String,
    authorId: mongoose.Types.ObjectId
})

module.exports = mongoose.model('Book', booksSchema);
