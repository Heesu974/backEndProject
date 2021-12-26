import "./db";
// import video from "./models/video";
// 이렇게 쓰지만, 이 Video를 당장 다른 곳에서 사용할 것은 아니기 때문에

import "./models/video"
//server.js에 database를 import해서 연결시킨 후 해당 연결이 성공적일 때, Video를 import해주는 것이다.
//이 연결로, db는 mongoose와 연결되어 우리의 video model을 인지하게 되는 것이다.
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import VideoRouter from "./routers/videoRouter";




const PORT = 4000;

const app = express();
const logger = morgan("dev");

const extended = express.urlencoded({ extended: "true" });


app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
//step 1. npm i pug
//step 2. Tell Express we're going to use Pug as a view engine
//이것으로 express는 html을 return하기 위해 pug를 사용할 것이다.
//step 3. Create pug file
app.use(logger);
app.use(extended);
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", VideoRouter);



//Listen External Access
app.listen(4000, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
});
//Listen External Access








