import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  authorLinks: {
    type: String,
  },
  photoUrl: {
    type: String,
  },
});

const Book = model("Book", bookSchema);

export default Book;
