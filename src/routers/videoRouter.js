import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController"

const VideoRouter = express.Router();

VideoRouter.get("/upload", upload);
VideoRouter.get("/:id(\\d+)", see);
VideoRouter.get("/:id(\\d+)/edit", edit);
VideoRouter.get("/:id(\\d+)/delete", deleteVideo);




export default VideoRouter;