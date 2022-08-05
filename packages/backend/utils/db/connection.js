// we use async to wait it success . Then it will work .
const db = require("./../../models");
const { databaseUrl } = require("../constant/baseUrls");
const connectionDB = async () => {
  try {
    await db.mongoose.connect(databaseUrl);
    console.log("**====>> database is connected <<====**");
  } catch (error) {
    throw error;
  }
};
module.exports = connectionDB;
