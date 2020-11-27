const koa = require("koa");
const Router = require("@koa/router");
const mongoose = require("mongoose");
const usersRouter = require("./resource/users/router");
const bodyParser = require("koa-bodyparser");
const error = require("koa-json-error");
const parameter = require('koa-parameter');



const app = new koa();
const router = new Router();



parameter(app)
app.use(error());
app.use(bodyParser());
app.use(router.routes());
app.use(usersRouter.routes());

(async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/zhihu",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("db connect");
    app.listen(3000, () => console.log("running on 3000"));
  } catch (error) {
    console.log(error);
  }
})();

// "mongodb+srv://chen:chen1234@zhihu.1flge.mongodb.net/zhihu?retryWrites=true&w=majority"
