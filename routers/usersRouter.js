import express from "express";
import routes from "../routes";

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => res.send("users"));
usersRouter.get(routes.userId, (req, res) => res.send("Userid"));
usersRouter.get(routes.editProfile, (req, res) => res.send("editProfile"));
usersRouter.get(routes.upload, (req, res) => res.send("upload"));
usersRouter.get(routes.logout, (req, res) => res.send("logout"));

export default usersRouter;
