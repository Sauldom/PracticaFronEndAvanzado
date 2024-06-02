const { User } = require("../models");
const createError = require("http-errors");
//creado como middleware
module.exports.index = async (req, res, next) => {
  try {
    const userId = req.session.userId;

    const user = await User.findById(userId);
    if (!user) {
      next(createError(401, `${JSON.stringify("No estas autentificado")}`));
      return;
    }

    next();
  } catch (error) {
    next(error);
  }
};
