module.export = (req, res, next) => {
  if (!req.session.userId) {
    res.render("login");
    return;
  }
  next();
};
