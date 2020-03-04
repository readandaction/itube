// global
const HOME = "/",
  JOIN = "/join",
  LOGIN = "/login",
  LOGOUT = "/logout",
  SEARCH = "/search";

// USERS
const USERS = "/users",
  USER_DETAIL = "/:id",
  EDIT_PROFILE = "/edit-profile",
  CHANGE_PASSWORD = "/change-password";
// VIDEO
const VIDEOS = "/videos",
  UPLOAD = "/upload",
  VIDEO_DETAIL = "/:id",
  EDIT_VIDEO = "/:id/edit-video",
  DELETE_VIDEO = "/:id/delete-video";

const routes = {
  //global
  home: HOME,
  login: LOGIN,
  join: JOIN,
  logout: LOGOUT,
  search: SEARCH,
  //USERS
  users: USERS,
  userDetail: id => {
    if (id) {
      return `/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  //VIDEOs
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO
};
export default routes;
