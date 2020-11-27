const User = require("./model");
class controller {
  async find(ctx) {
    const users = await User.find({}).exec();
    ctx.body = users;
  }
  async findById(ctx) {
    try {
      const user = await User.findById(ctx.params.id).exec();
      ctx.body = user;
    } catch(e) {
      if (e.name === 'CastError' || e.name === 'NotFoundError') {
        ctx.throw(404);
      }
      ctx.throw(500);
    }
  }
  async create(ctx) {
    try {
      const user = await User.create(ctx.request.body);
      ctx.body = user;
    } catch (e) {
      ctx.throw(422);
    }
  }
  async removeById(ctx) {
    try {
      const remove = await User.findByIdAndRemove(ctx.params.id);
      if(!remove) {ctx.throw(404)}
      ctx.status = 204;
    } catch (error) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      }
      ctx.throw(500);
    }

  }
  async updateById(ctx) {
    try {
      const update = await User.findByIdAndUpdate(
        ctx.params.id,
        ctx.request.body,
        { new: true }
      );
      if(!update){
        ctx.throw(404)
      }
      ctx.body = update;
    } catch (e) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      }
      ctx.throw(500);
    }

  }
}

module.exports = new controller();
