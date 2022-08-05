const PORT = process.env.PORT || 3000;
// Todo : api url to config variable
const databaseUrl =
  process.env.NODE_ENV !== "production"
    ? "mongodb://127.0.0.1:27017/onlineBookstore"
    : process.env.MONGOOSE_URL;
const sellerBaseUrl =
  process.env.NODE_ENV !== "production"
    ? `http://localhost:3000`
    : process.env.SELLER_BASE_URL;
module.exports = { databaseUrl, sellerBaseUrl };
