import express from "express";
import { join, login } from "../controllers/userController";
import { trending, search } from "../controllers/videoController";


const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
//when you login, WHO is loggin in ? USER. so Go to userController.js, make login controller.
globalRouter.get("/search", search);
//Searching for WHAT ?? Videos. so Go to videoController.js

export default globalRouter;

