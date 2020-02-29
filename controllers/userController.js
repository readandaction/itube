import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pagetitle: "join" });
};
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  // console.log(req.body);
  if (password === password2) {
    res.redirect(routes.home);
  } else {
    res.render("join", { pagetitle: "join" });
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pagetitle: "login" });
export const postLogin = (req, res) =>
  res.render("login", { pagetitle: "login" });

export const logout = (req, res) =>
  res.render("logout", { pagetitle: "logout" });
export const users = (req, res) => res.render("users", { pagetitle: "users" });
export const userDetail = (req, res) =>
  res.render("userId", { pagetitle: "userDetail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pagetitle: "editProfile" });
export const changePassword = (req, res) =>
  res.render("changen Password", { pagetitle: "changePassword" });
