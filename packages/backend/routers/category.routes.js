const controller = require("../controllers/categories.controller");
const authJwt = require("./../middleware/auth/authJwt");
module.exports = (app) => {
  // only admin can access these routes
  app.get(
    "/api/v1/categories",
    // [authJwt.verifyToken, authJwt.isAdmin],
    controller.getCategory
  );
  app.post(
    "/api/v1/categories",
    // [authJwt.verifyToken, authJwt.isAdmin],
    controller.createCategory
  );
  app.put(
    "/api/v1/categories/:id",
    // [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateCategory
  );
  app.delete(
    "/api/v1/categories/:id",
    // [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteCategory
  );
};
