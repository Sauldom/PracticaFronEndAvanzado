const { User } = require("../models");

class LoginController {
  index(req, res, next) {
    res.locals.error = "";
    res.locals.email = "";
    res.render("login");
  }

  async post(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });

      if (!user || !(await user.comparePassword(password))) {
        res.locals.error = "Invalid credentials";
        res.locals.email = email;
        res.render("login");
        return;
      }
      req.session.userId = user._id;

      res.redirect("/anuncios");
    } catch (error) {
      next(error);
    }
  }
  logout(req, res, next) {
    req.session.regenerate((err) => {
      if (err) {
        next(err);
        return;
      }
      console.log(req.session);
      res.redirect("login");
    });
  }
}

module.exports = LoginController;
