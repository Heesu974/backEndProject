import express from "express";
import {
    watch,
    editGet,
    editPost,
    uploadGet,
    uploadPost
} from "../controllers/videoController"

const videoRouter = express.Router();


videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(editGet).post(editPost);
videoRouter.route("/upload").get(uploadGet).post(uploadPost);


export default videoRouter;