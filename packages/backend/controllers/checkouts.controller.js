const db = require("../models");
const io = require('./../server')

// :::::::::::::::::::::::::::::::::::::::::::::: create checkout :::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const createCheckout = async (req, res) => {
  const body = req.body;
  const book = new db.checkouts({
    userId:body.userId,
    bookId:body.bookId,
    date:body.date,
    qty:body.qty,
    totalPrice:body.totalPrice
  });
  const result = await book.save();
  res.status(200).send({ data: result, message: "create successful !" ,statusCode: 200 });
};

// :::::::::::::::::::::::::::::::::::::::::::::: get checkout :::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const getCheckout = async (req, res) => {
  const response = await db.checkouts.find();
  io.emit("getCheckouts", response)
  res.status(200).send({ data: response, statusCode:200 , message: 'get data successful !', });

};

// :::::::::::::::::::::::::::::::::::::::::::::: update checkout :::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const updateCheckout = async(req, res) => {
  const param = req.params;
  try{
    const response = await db.checkouts.findByIdAndDelete()
  }catch(error){

  }
  res.status(200).send(`update checkout with id : ${param.id}`);
};

// :::::::::::::::::::::::::::::::::::::::::::::: delete checkout :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const deleteCheckout =async (req, res) => {
  const response = await db.checkouts.find();
  io.emit("getCheckouts", response)
  const param = req.params;
  try{
    const response = await db.checkouts.deleteOne({"_id":param.id})
    const result = await db.checkouts.find();
    io.emit("getCheckouts", result)
    res.status(200).send({response:response , message: "delete checkout success !", statusCode:200});
}catch(error){
    res.status(500).send({error:error || 'id not found!'})
  }
};

module.exports = {
  createCheckout,
  getCheckout,
  updateCheckout,
  deleteCheckout,
};
