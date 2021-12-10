import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => {
    res.send("Home");
}

globalRouter.get("/", handleHome);

export default globalRouter;
//변수를 default로 export하고 있다.
//>>const globalRouter = express.Router();
//globalRouter를 export하는 것이다.
//따라서 누구든 globalRouter.js를 import하면, 
//globalRouter자체를 import하는 것이다.


