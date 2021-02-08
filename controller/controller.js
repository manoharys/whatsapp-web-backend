import Rooms from "../model/schema.js";
import mongoose from "mongoose";
import { db } from "../database/database.js";
const { Types } = mongoose;

export const addRooms = async (req, res) => {
  try {
    const roomName = req.body;
    const room = Rooms(roomName);
    await room.save();
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getRooms = async (req, res) => {
  try {
    const rooms = await Rooms.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleRoom = (req, res) => {
  const id = req.params.id;
  //console.log(id);
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).send("couldn't find data with " + req.params.id);
  }
  Rooms.findById(id, function (err, data) {
    if (err) res.send(err);
    res.json(data);
  });
};

export const addMessages = (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).send("couldn't find data with " + req.params.id);
  }
  const messageBody = req.body;
  console.log("body", messageBody);
  Rooms.findOneAndUpdate(
    { _id: id },
    { $push: { roomMessages: messageBody } },
    (error, success) => {
      if (error) {
        console.log(error);
      } else {
        res.json(success);
      }
    }
  );
};
