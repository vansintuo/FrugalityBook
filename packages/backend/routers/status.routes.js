const controller = require("../controllers/status.controller");
const authJwt = require("../middleware/auth/authJwt");
module.exports = (app) => {
  app.get("/api/v1/statuses", controller.getStatus);
  app.post("/api/v1/statuses", controller.craeteStatus);
  app.put("/api/v1/statuses/:id", controller.updateStatus);
  app.delete("/api/v1/statuses/:id", controller.deleteStatus);
};
