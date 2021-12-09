import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");


//GlobalRouter 생성
const globalRouter = express.Router();
//UserRouter 생성
const userRouter = express.Router();
//VideoRouter 생성
const VideoRouter = express.Router();

//글로벌 라우터의 route URL 은 "/"
//유저 라우터의 route URL은 "/users"
//비디오 라우터의 route URL은 "/videos"



const handleHome = (req, res) => {
    return res.end();
}
const handleProtected = (req, res) => {
    return res.send("Okay you can make it")
}

app.use(logger)


app.get("/", handleHome);
app.get("/protected", handleProtected);


const handleLogin = (req, res) => {
    return res.send("<h1>you can do this, girl</h1>")
}
app.get("/login", handleLogin)



//Listen External Access
app.listen(4000, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
});
//Listen External Access







