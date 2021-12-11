import express from "express";
import { watch, edit } from "../controllers/videoController"

const VideoRouter = express.Router();


VideoRouter.get("/watch", watch);
VideoRouter.get("/edit", edit);

export default VideoRouter;