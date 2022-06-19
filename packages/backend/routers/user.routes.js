const controller = require("../controllers/users.controller");
const authJwt = require("./../middleware/auth/authJwt");
module.exports = (app) => {
  // route for admin 
  app.post("/api/v1/admin", controller.signUp);
  app.post("/api/v1/author/admin/signIn", controller.signIn);
  app.get("/api/v1/admin", controller.getUser);
  app.put("/api/v1/admin/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.updateUser);
  app.delete("/api/v1/admin/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.deleteUser);

  // route for seller or normal user
  app.post("/api/v1/signUp", controller.signUp);
  app.post("/api/v1/author/signIn", controller.signIn);
  app.get("/api/v1/user", [authJwt.verifyToken], controller.getUser);
  app.get("/api/v1/currentUser", [authJwt.verifyToken] , controller.getCurrentUser)
  app.put("/api/v1/user/:id", [authJwt.verifyToken], controller.updateUser);
  app.delete("/api/v1/user/:id", [authJwt.verifyToken], controller.deleteUser);
  app.get("/api/v1/getCurrentUser", [authJwt.verifyToken], controller.getCurrentUser)
};
