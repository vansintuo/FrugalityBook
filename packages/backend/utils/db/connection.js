// we use async to wait it success . Then it will work .
const db = require("./../../models");

const connectionDB = async () => {
  try {
    await db.mongoose.connect("mongodb://127.0.0.1:27017/onlineBookstore");
    console.log("**====>> database is connected <<====**");
  } catch (error) {
    throw error;
  }
};
module.exports = connectionDB;
