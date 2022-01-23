import express from "express";
import {join} from "../controllers/userController";
import {trendings} from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/",trendings);
globalRouter.get("/join",join);

export default globalRouter;