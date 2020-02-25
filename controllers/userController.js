export const login = (req, res) => res.render("login", { pagetitle: "login" });
export const logout = (req, res) =>
  res.render("logout", { pagetitle: "logout" });
export const join = (req, res) => res.render("join", { pagetitle: "join" });
export const users = (req, res) => res.render("users", { pagetitle: "users" });
export const userDetail = (req, res) =>
  res.render("userId", { pagetitle: "userDetail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pagetitle: "editProfile" });
export const changePassword = (req, res) =>
  res.render("changen Password", { pagetitle: "changePassword" });
