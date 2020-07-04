const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  authors: [
    {
      type: String,
      trim: true,
      required: true,
    },
  ],
  title: {
    type: String,
    trim: true,
    required: true,
    minlength: 1,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
  },
  categories: [
    {
      type: String,
      trim: true,
    },
  ],
  publishedDate: {
    type: Number,
  },
  pageCount: {
    type: Number,
  },
  averageRating: {
    type: Number,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
