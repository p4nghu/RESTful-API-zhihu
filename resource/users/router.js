const Router = require("@koa/router");
const userController = require("./controller");
const router = new Router({
  prefix: "/users",
});

router
  .get("/", userController.find)
  .post("/", userController.create)
  .get("/:id", userController.findById)
  .put("/:id", userController.updateById)
  .del("/:id", userController.removeById);

module.exports = router;
