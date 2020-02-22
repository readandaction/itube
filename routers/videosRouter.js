import express from "express";
import routes from "../routes";
import {
  videos,
  videoId,
  editVideo,
  deleteVideo
} from "../controllers/videosController";

const videosRouter = express.Router();

videosRouter.get(routes.home, videos);
videosRouter.get(routes.videoId, videoId);
videosRouter.get(routes.editVideo, editVideo);
videosRouter.get(routes.deleteVideo, deleteVideo);

export default videosRouter;
