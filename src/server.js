import "./db";
//서버는 이 라인을 보는 순간, 이 파일을 import해줌으로써, 내 서버가 mongo에 연결되는 것이다.
//db를 여기서 불러오지만, console창에서 볼 수 있 듯, Connected가 server listen보다 늦게 발생하는 것을 볼 수 있다. 이유는 db가 느리기 때문이다.
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








