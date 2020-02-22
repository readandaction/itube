import express from "express";
import routes from "../routes";
import {
  users,
  userId,
  editProfile,
  logout,
  upload
} from "../controllers/usersController";

const usersRouter = express.Router();

usersRouter.get("/", users);
usersRouter.get(routes.userId, userId);
usersRouter.get(routes.editProfile, editProfile);
usersRouter.get(routes.upload, upload);
usersRouter.get(routes.logout, logout);

export default usersRouter;
