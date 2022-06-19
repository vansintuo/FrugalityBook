const { response } = require("express");
const db = require("../models");
const io = require("../server");
// ::::::::::::::::::::::::::::::::::::::::::::: create book :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const createBook = async (req, res) => {

  const body = req.body;
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
  const books = await db.books.find();
  io.emit("book", books);
  res.status(200).send({ message: "create success ", statusCode: 200 });
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
// :::::::::::::::::::::::::::::::::::::::::::::: update book :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const updateBook = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await db.books.findByIdAndUpdate(id, body);
    const books = await db.books.find();
    io.emit("book", books);
    res.status(200).send({
      message: "update successful !",
      statusCode: 200,
    });
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

// :::::::::::::::::::::::::::::::::::::::::::::: delete book :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const deleteBook = async (req, res) => {

  const param = req.params;
  try {
    const response = await db.books.findOneAndDelete({ _id: param.id });
    const books = await db.books.find();
    io.emit("book", books);
    res.status(200).send({
      message: "delete successful !",
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
};
