const db = require("../models");
const io = require("../server");

// :::::::::::::::::::::::::::::::::::::::::::::: create checkout :::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const createCheckout = async (req, res) => {
  const body = req.body;
  const book = new db.checkouts({
    userId: body.userId,
    bookId: body.bookId,
    date: body.date,
    qty: body.qty,
    totalPrice: body.totalPrice,
  });
  const result = await book.save();
  res
    .status(200)
    .send({ data: result, message: "create successful !", statusCode: 200 });
};

// :::::::::::::::::::::::::::::::::::::::::::::: get checkout :::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const getCheckout = async (req, res) => {
  const userId = req.userId;
  try {
    const response = await db.checkouts.find({ userId: { $all: [userId] } });
    console.log("response ::::::::", response);
    const allBooks = [];
    for (var i = 0; i < response.length; i++) {
      const bookId = response[i].bookId[0];
      const checkout = response[i]._id;
      let book = await db.books.find({ _id: { $all: [bookId] } });
      let finalBook = book[0].toObject();
      finalBook.checkoutId = checkout;
      allBooks.push(finalBook);
    }
    if (allBooks.length == 0) {
      res.status(200).send({ message: "No cart !" });
    } else {
      io.emit("getCheckouts", allBooks);
      res.status(200).send({
        data: allBooks,
        count: allBooks.length,
        statusCode: 200,
        message: "get data successful !",
      });
    }
  } catch (err) {
    res.status(500).send({ error: err || "error occured!" });
  }
};

// :::::::::::::::::::::::::::::::::::::::::::::: update checkout :::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const updateCheckout = async (req, res) => {
  const param = req.params;
  try {
    const response = await db.checkouts.findByIdAndDelete();
  } catch (error) {}
  res.status(200).send(`update checkout with id : ${param.id}`);
};

// :::::::::::::::::::::::::::::::::::::::::::::: delete checkout :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const deleteCheckout = async (req, res) => {
  const userId = req.userId;
  const param = req.params;
  try {
    await db.checkouts.findOneAndDelete({ _id: param.id });
    const response = await db.checkouts.find({ userId: { $all: [userId] } });
    const allBooks = [];
    for (var i = 0; i < response.length; i++) {
      const bookId = response[i].bookId[0];
      const checkout = response[i]._id;
      let book = await db.books.find({ _id: { $all: [bookId] } });
      let finalBook = book[0].toObject();
      finalBook.checkoutId = checkout;
      allBooks.push(finalBook);
    }
    if (allBooks.length == 0) {
      res.status(200).send({ message: "No cart !" });
    } else {
      io.emit("getCheckouts", allBooks);
      res.status(200).send({
        data: allBooks,
        count: allBooks.length,
        statusCode: 200,
        message: "get data successful !",
      });
    }
  } catch (error) {
    res.status(500).send({ error: error || "id not found!" });
  }
};

module.exports = {
  createCheckout,
  getCheckout,
  updateCheckout,
  deleteCheckout,
};
