const db = require("../models");
const io = require("../server");

// :::::::::::::::::::::::::::::::::::::::::::::: create book :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const createCategory = async (req, res) => {
  const cat = await db.categories.find();
  io.emit("cat", cat);
  const body = req.body;
  const categories = new db.categories({
    category: body.category,
    bookMatch: body.bookMatch,
  });
  await categories.save();
  res.status(200).send({ message: "create success", statusCode: 200 });
};

// :::::::::::::::::::::::::::::::::::::::::::::: get book :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const getCategory = async (req, res) => {
  const cat = await db.categories.find();
  io.emit("cat", cat);
  const param = req.params;
  const response = await db.categories.find();
  res.status(200).send({ data: response });
};

// :::::::::::::::::::::::::::::::::::::::::::::: update book :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const updateCategory = async (req, res) => {
  const param = req.params;
  const body = req.body;
  try {
    await db.categories.findByIdAndUpdate(param.id, body);
    res.status(200).send({
      message: {
        "update category with id ": param.id,
      },
    });
  } catch (error) {
    res.status(200).send({ "error ": error });
  }
  const cat = await db.categories.find();
  io.emit("cat", cat);
};

// :::::::::::::::::::::::::::::::::::::::::::::: delete book :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const deleteCategory = async (req, res) => {
  const param = req.params;
  try {
    await db.categories.findOneAndDelete({ _id: param.id });
    res.status(200).send({
      "deleted category with id": param.id,
      "status code": 200,
    });
  } catch (error) {
    res.status(500).send({ error: error || "id not found!" });
  }
};

module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
