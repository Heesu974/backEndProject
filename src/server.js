import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import VideoRouter from "./routers/videoRouter";


const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger)

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", VideoRouter);


//Listen External Access
app.listen(4000, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
});
//Listen External Access








