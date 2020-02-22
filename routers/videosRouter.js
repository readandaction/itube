import express from "express";
import routes from "../routes";

const videosRouter = express.Router();

videosRouter.get(routes.home, (req, res) => res.send("home"));
videosRouter.get(routes.videoId, (req, res) => res.send("videoid"));
videosRouter.get(routes.editVideo, (req, res) => res.send("editVideo"));
videosRouter.get(routes.deleteVideo, (req, res) => res.send("Delete Video"));

export default videosRouter;
