const { response } = require("express");
const db = require("../models");
const io = require("../Server");
// ::::::::::::::::::::::::::::::::::::::::::::: create book :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const createBook = async (req, res) => {
  const body = req?.body;
  const userId = req.userId;
  const book = new db.books({
    title: body.title,
    price: body.price,
    status: body.status,
    author: body.author,
    stock: body.stock,
    desc: body.desc,
    userId: req.userId,
    allImagePaths: body.allImagePaths,
    allImageNames: body.allImageNames,
    category: body.category,
  });
  const result = await book.save();
  const books = await db.books.find({ userId: { $all: [req?.userId] } });
  //catch bookid and put to user colletion at books attr
  const bookId = result._id;
  await db.users.updateOne({ _id: userId }, { $push: { books: bookId } });
  if (books.length != 0) {
    res
      .status(200)
      .send({ data: books, statusCode: 200, message: "create success" });
    io.emit("book", books);
  } else res.status(200).send({ data: [] });
};

// :::::::::::::::::::::::::::::::::::::::::::::: get book :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const getBook = async (req, res) => {
  const books = await db.books.find();
  io.emit("book", books);
  const cate = req.query.category;
  const id = req.params.id;
  const title = req.param.title;
  if (id || cate || title) {
    if (id) {
      // find by id
      const result = await db.books.find({ _id: id });
      res.status(200).send({ data: result });
    }
    if (cate) {
      // find by category
      const result = await db.books.find({ category: cate });
      res.status(200).send({ data: result });
    }
    if (title) {
      // find by title
      const result = await db.books.find({ title: title });
      res.status(200).send({ data: result });
    }
  } else {
    // find all
    const response = await db.books.find();
    res.status(200).send({ data: response, count: response.length });
  }
};
//:::::::::::::::::::::::get book for seller :::::::::::::::::
const getBookSeller = async (req, res) => {
  //method find data that match one amount value in array "$all:[array]"
  const books = await db.books.find({ userId: { $all: [req.userId] } });
  if (books.length != 0) {
    res.status(200).send({ data: books });
    io.emit("book", books);
  } else res.status(200).send({ data: [] });
};
// :::::::::::::::::::::::::::::::::::::::::::::: update book :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const updateBook = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await db.books.findByIdAndUpdate(id, body);
    const books = await db.books.find({ userId: { $all: [req.userId] } });
    res.status(200).send({
      message: "update successful !",
      statusCode: 200,
    });
    io.emit("book", books);
  } catch (err) {
    res.status(500).send({ error: err || "error accur!" });
  }
};

// :::::::::::::::::::::::::::::::::::::::::::::: delete book :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const deleteBook = async (req, res) => {
  const param = req.params;
  const userId = req.userId;
  try {
    const result = await db.books.findOneAndDelete({ _id: param.id });
    const books = await db.books.find({ userId: { $all: [userId] } });
    //delete from books collection and from users.books as well
    const bookId = result._id;
    await db.users.updateOne({ _id: userId }, { $pull: { books: bookId } });
    io.emit("book", books);
    res.status(200).send({
      message: "deleted successful !",
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).send({ error: error || "id not found!" });
  }
};

module.exports = {
  createBook,
  getBook,
  updateBook,
  deleteBook,
  getBookSeller,
};
