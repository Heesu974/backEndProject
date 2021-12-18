import express from "express";
import { watch, edit, upload, deleteVideo } from "../controllers/videoController"

const VideoRouter = express.Router();

VideoRouter.get("/upload", upload);
VideoRouter.get("/:id(\\d+)", watch);
VideoRouter.get("/:id(\\d+)/edit", edit);
VideoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default VideoRouter;