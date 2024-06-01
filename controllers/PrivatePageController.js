const { User } = require("../models");
const createError = require("http-errors");

module.exports.index = async (req, res, next) => {
  try {
    const userId = req.session.userId;

    const user = await User.findById(userId);
    if (!user) {
      next(createError(401, "Json con el error"));
      return;
    }
    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    next(error);
  }
};
