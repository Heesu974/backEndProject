import express from "express";
import { edit, deleteUser, logout, see } from "../controllers/userController"

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/delete", deleteUser);
userRouter.get("/:id", see);
//:id 의 뜻과, 왜 마지막에 쓰는지는 나중에 알게 될거임 

export default userRouter;