import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";
//default Export가 아닌 Export const인 경우에는 이름을 똑같이 써야한다. 


const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;


