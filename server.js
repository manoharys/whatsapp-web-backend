import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./database/database.js";

const app = express();
const PORT = process.env.PORT || 3030;

//middeware's
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>WhatsApp web </h1>");
});

app.listen(PORT, () =>
  console.log(`server started at the port http://localhost:${PORT}`)
);
