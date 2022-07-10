const db = require("./../models");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");
//************************* Create Users *************************/
//****************************************************************/
const signUp = async (req, res) => {
  const { fullname, email, role, password } = req.body;
  body = req.body;
  // check whether user input their data or not
  if (Object.keys(body) == 0) {
    res.status(400).send({
      message: "can not empty body",
      statusCode: 400,
    });
  }
  // check format of email
  const isEmail = validator.isEmail(email);
  if (!isEmail) {
    res.status(400).send({ error: "Email is wrong format!" });
  }
  // check length of password
  if (password.length < 6 || password.length > 8) {
    res.status(400).send({ error: "password is required from 6-8 digit!" });
  }

  try {
    const isUser = await db.users.findOne({ email: email });
    // user has in system or not
    if (isUser) {
      return res.status(401).send({ error: "This email is already in used." });
    }
    const user = new db.users({
      fullname,
      email,
      role,
      password: bcrypt.hashSync(password, 8),
    });
    // create user
    const data = await user.save();
    return res
      .status(200)
      .send({ data: data, message: "create success", statusCode: 200 });
    // handle error
  } catch (error) {
    res.status(500).send({
      error: error.message || "error occured",
      statusCode: 500,
    });
    throw error;
  }
};
// :::::::::::::::::::::::::: get user ::::::::::::::::::::::
const getUser = async (req, res) => {
  const fullname = req.query.fullname;
  const page = req.query.page;
  let limit = 10;
  let nextPage = null;
  let previousPage = null;
  let pages;
  // check whether user inputted limit or page or not
  if (req.query.limit <= 0 || page <= 0) {
    res.status(500).send({
      message: "bad request",
      statusCode: 500,
    });
  }
  // if have limit query
  if (req.query.limit) {
    limit = req.query.limit;
  }
  try {
    const total = await db.users.find().count();
    // find as normally
    if (fullname) {
      const users = await db.users.find({
        fullname: { $regex: fullname, $options: "i" },
      });
      res.status(200).send({
        data: users,
        count: users.length,
        total: total,
      });
    } else if (page) {
      // define how many data display and number of pages
      const user = await db.users
        .find()
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();
      if (total % limit == 0) {
        pages = total / limit;
      } else {
        pages = parseInt(total / limit) + 1;
      }
      // find previous page
      if (page != 1) {
        previousPage = `http://localhost:${
          process.env.PORT
        }/api/v1/users?page=${Number(page) - 1}&limit=${limit}`;
      }
      // find next page
      if (page < pages) {
        nextPage = `http://localhost:${process.env.PORT}/api/v1/users?page=${
          Number(page) + 1
        }&limit=${limit}`;
      }
      // send data to users
      res.status(200).send({
        data: user,
        count: user.length,
        total: total,
        pages: pages,
        message: "success",
        statusCode: 200,
        nextPage: nextPage,
        previousPage: previousPage,
        firstPage: `http://localhost:${process.env.PORT}/api/v1/users?page=1&limit=${limit}`,
        lastPage: `http://localhost:${process.env.PORT}/api/v1/users?page=${pages}&limit=${limit}`,
      });
    } else {
      // handle errors
      const users = await db.users.find();
      res.status(200).send({
        data: users,
        count: users.length,
        total: total,
      });
    }
  } catch (error) {
    // any errors
    res.status(500).send({
      console: "server Error",
      statusCode: 500,
      message: error.message,
    });
  }
};
// ::::::::::::::::::: update user :::::::::::::::::::::::
const updateUser = async (req, res) => {
  // update user , it stil doesn't work now .
  const id = req.params.id;
  const body = req.body;
  console.log(body);
  try {
    if (Object.keys(body) != 0) {
      const response = await db.users.findByIdAndUpdate(id, body);
      if (!response) {
        return res.status(404).send({
          message: `not found with id: ${id}`,
          statusCode: 404,
        });
      } else {
        return res.status(200).send({
          data: response,
          message: `update id : ${id}`,
          statusCode: 200,
        });
      }
    } else {
      res.status(200).send({
        warning: "make sure you entered value to update!!",
        statusCode: 200,
      });
    }
  } catch (error) {
    res.status(404).send({
      error: error.message,
      statusCode: 404,
      message: "make sure id exists in document!",
    });
  }
};
// :::::::::::::::::::::: delete user ::::::::::::::::::::::
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await db.users.findByIdAndDelete(id);
    if (!response) {
      return res.status(400).send({
        error: `Bad request , Not found id ${id}`,
        statusCode: 404,
        message: "Make sure your id exists in documents",
      });
    }
    res.status(200).send({
      message: `delete id ${id}`,
      data: response,
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).send({
      error: error,
      statusCode: 500,
    });
  }
};
// :::::::::::::::::::::: sign in :::::::::::::::::::::::::::::::
const signIn = async (req, res) => {
  const { email, password } = req.body;
  if (Object.keys(req.body) == 0) {
    return res.status(200).send({ error: "Body is not empty data!" });
  }
  try {
    const user = await db.users.findOne({ email: email });
    if (!user) {
      return res
        .status(401)
        .send({ message: "Email is not in system! No user!" });
    }
    const isRigthPassword = bcrypt.compareSync(password, user.password);
    if (!isRigthPassword) {
      return res.status(200).send({ message: "password is not match!" });
    }
    const payload = { userId: user._id };
    jwt.sign(
      payload,
      process.env.ONLINE_BOOKSTORE,
      { expiresIn: "30d" },
      (error, token) => {
        if (error) {
          return res.status(201).send({ message: error });
        }
        res.status(200).send({ data: user, accessToken: token });
      }
    );
  } catch (error) {
    res.status(400).send({ error: error });
  }
};
//::::::::::::::: get current user ::::::::::::::::::::::
const getCurrentUser = async (req, res) => {
  const userId = req.userId;
  console.log("userId :::: ", userId);
  if (!userId) res.status(401).send({ message: "unauthorized" });
  try {
    const user = await db.users.findById(userId);
    if (!user) res.status(401).send({ message: "no user found" });
    res.status(200).send({ data: user });
  } catch (error) {
    res.status(500).send({ message: error || "Internal server error" });
  }
};
module.exports = {
  signUp,
  getUser,
  updateUser,
  deleteUser,
  signIn,
  getCurrentUser,
};
