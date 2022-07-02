const controller = require("../controllers/books.controller");
const authJwt = require("./../middleware/auth/authJwt");
module.exports = (app) => {
  // :::::::::::::::: route for  admin ::::::::::::::::::::
  app.get("/api/v1/admin/books", [authJwt.verifyToken], controller.getBook);
  app.get("/api/v1/admin/books/:id", controller.getBook);
  app.post(
    "/api/v1/admin/books",
    // [authJwt.verifyToken, authJwt.isAdmin],
    controller.createBook
  );
  app.put(
    "/api/v1/admin/books/:id",
    // [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSeller],
    controller.updateBook
  );
  app.delete(
    "/api/v1/admin/books/:id",
    // [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteBook
  );

  //:::::::::::::::::: route for normal seller :::::::::::::::::::::::
  app.get(
    "/api/v1/books",
    // [authJwt.verifyToken, authJwt.isSeller],
    controller.getBook
  );
  app.get(
    "/api/v1/books/seller",
    [authJwt.verifyToken, authJwt.isSeller],
    controller.getBookSeller
  );
  app.get("/api/v1/books/:id", controller.getBook);
  app.get("/api/v1/books/:title", controller.getBook);
  app.get("/api/v1/books/:cat", controller.getBook);
  app.post(
    "/api/v1/books",
    [authJwt.verifyToken, authJwt.isSeller],
    controller.createBook
  );
  app.put(
    "/api/v1/books/:id",
    // [authJwt.verifyToken, authJwt.isSeller],
    controller.updateBook
  );
  app.delete(
    "/api/v1/books/:id",
    // [authJwt.verifyToken, authJwt.isSeller],
    controller.deleteBook
  );
};
