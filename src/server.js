import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger)


//GlobalRouter 생성
const globalRouter = express.Router();

const handleHome = (req, res) => {
    res.send("Home");
}

globalRouter.get("/", handleHome);

//UserRouter 생성
const userRouter = express.Router();

const handleEditUser = (req, res) => {
    res.send("Edit User");
}

userRouter.get("/edit", handleEditUser);

//VideoRouter 생성
const VideoRouter = express.Router();

const handleWatchVideo = (req, res) => {
    res.send("Watch")
}

VideoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", VideoRouter);
//여기의 라우터가 express한테 누군가가 "/videos"로 시작하는 url에 접근하면, 
//videoRouter에 있는 controller를 찾게 하는 것이다.









//Listen External Access
app.listen(4000, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
});
//Listen External Access







