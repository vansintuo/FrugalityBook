const mongoose = require("mongoose");
const Book = require("./book.model");
const User = require("./user.model");
const Category = require('./category.model')
const Checkout = require('./checkout.model');
const Status = require("./status.model");
let db = {};
db.mongoose = mongoose;
db.books = Book;
db.users = User;
db.categories = Category;
db.checkouts = Checkout;
db.statuses = Status ;

module.exports = db;
