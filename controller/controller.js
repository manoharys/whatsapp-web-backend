import Rooms from "../model/schema.js";
import mongoose from "mongoose";
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

export const getSingleRoom =  (req, res) => {

    const id = req.params.id;
    console.log(id);
    if (!Types.ObjectId.isValid(id)) {
      return res.status(400).send("couldn't find data with " + req.params.id);
    }
    Rooms.findById(id, function(err, workout) {
      if (err)
          res.send(err)
      res.json(workout);
  })
    
   
};

export const postMessage = async (req, res) => {
  try {
    const postData = req.body;
    const posts = Rooms(postData);
    await posts.save();
    res.status(201).json(posts);
  } catch (error) {
    res.status(500).json({ Messages: error });
  }
};

export const getMessages = async (req, res) => {
  try {
    const rooms = await rooms.Rooms();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json(error);
  }
};
