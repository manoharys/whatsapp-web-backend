import express from "express";
import * as controller from "../controller/controller.js";

const route = express.Router();

route.post("/room", controller.addRooms);
route.get("/room", controller.getRooms);
route.get("/room/:id", controller.getSingleRoom);
route.post("/messages/new", controller.postMessage);

route.get("/messages", controller.getMessages);

export default route;
