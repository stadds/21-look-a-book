const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    minlength: 1,
  },
  authors: [
    {
      type: String,
      trim: true,
      required: true,
    },
  ], 
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
    type: String,
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
