import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Pusher from "pusher";
import { db } from "./database/database.js";
import mongoose from "mongoose";

import route from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3030;

//middeware's
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//pusher config
const pusher = new Pusher({
  appId: "1151698",
  key: "945758d3b6566a1295a9",
  secret: "289304c34954e5bec8ba",
  cluster: "ap2",
  useTLS: true,
});

const database = mongoose.connection;

database.once("open", () => {
  const msgCollection = database.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log(change);
    const messageDetails = change.fullDocument;
    pusher.trigger("messages", "inserted", {
      name: messageDetails.name,
      message: messageDetails.message,
    });
  });
});

app.get("/", (req, res) => {
  res.status(200).send("<h1>WhatsApp web </h1>");
});

app.use("/posts", route);

app.listen(PORT, () =>
  console.log(`server started at the port http://localhost:${PORT}`)
);
