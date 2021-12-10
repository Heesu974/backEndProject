import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
//globalRouter를 default로 export 했기 때문에,
//이름을 globalRouter를 globalRouter로 유지할 필요가 없다.
//import global from "./routers/globalRouter";
//이렇게 쓰고, 
//app.use("/", global); 
//이라고 할 수도 있다. 
//node.js는 global가 globalRouter라는 것을 알기때문에
//하지만, 헷갈리니까 똑같이 적는게 좋다.
//참고로, 
//import express from "express"/ 여기의 express도 default export이다.
import userRouter from "./routers/userRouter";
import VideoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger)

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", VideoRouter);
//user가 /videos로 시작하는 url에 들어가면,
//express가 videoRouter 안으로 들어간다.
//그 다음 videoRouter에서 나머지 url을 찾는다.

//Listen External Access
app.listen(4000, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
});
//Listen External Access








