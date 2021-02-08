import express from "express";
import * as controller from "../controller/controller.js";

const route = express.Router();

route.post("/room", controller.addRooms);
route.post("/room/:id", controller.addMessages)
route.get("/room", controller.getRooms);
route.get("/room/:id", controller.getSingleRoom);



export default route;
