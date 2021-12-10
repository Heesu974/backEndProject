import express from "express";

const VideoRouter = express.Router();

const handleWatchVideo = (req, res) => {
    res.send("Watch")
}

VideoRouter.get("/watch", handleWatchVideo);

export default VideoRouter;