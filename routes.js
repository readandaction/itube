// global
const HOME = "/",
  LOGIN = "/login",
  JOIN = "/join";
// USERS
const USERS = "/users",
  USER_ID = "/:id",
  EDIT_PROFILE = "/:id/edit-profile",
  UPLOAD = "/:id/upload",
  LOGOUT = "/:id/logout";
// VIDEO
const VIDEOS = "/videos",
  VIDEO_ID = "/:id",
  EDIT_VIDEO = "/:id/edit-video",
  DELETE_VIDEO = "/:id/delete-video";

const routes = {
  //global
  home: HOME,
  login: LOGIN,
  join: JOIN,
  //USERS
  users: USERS,
  userId: USER_ID,
  editProfile: EDIT_PROFILE,
  upload: UPLOAD,
  logout: LOGOUT,
  //VIDEO
  videos: VIDEOS,
  videoId: VIDEO_ID,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO
};
export default routes;
