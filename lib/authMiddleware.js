module.export = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
    return;
  }
  next();
};
