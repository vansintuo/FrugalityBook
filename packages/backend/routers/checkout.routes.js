const controller = require("../controllers/checkouts.controller");
const authJwt = require("./../middleware/auth/authJwt");
module.exports = (app) => {
  app.get("/api/v1/checkouts", [authJwt.verifyToken], controller.getCheckout);
  app.post("/api/v1/checkouts", controller.createCheckout);
  app.put("/api/v1/checkouts/:id", controller.updateCheckout);
  app.delete(
    "/api/v1/checkouts/:id",
    [authJwt.verifyToken],
    controller.deleteCheckout
  );
};
