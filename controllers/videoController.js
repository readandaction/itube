import routes from "../routes";

export const home = (req, res) =>
  res.render("home", { pageTitle: "home", videos });

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "search", searchingBy, videos });
};

export const getUpload = (req, res) => {
  res.render("upload", { pagetitle: "upload" });
};
export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  //To Do: Post video
  console.log(file, title, description);
  res.redirect(routes.videoDetail(123));
};
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "videoDetail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
