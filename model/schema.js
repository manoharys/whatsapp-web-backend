import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
  name: String,
  roomMessages: [
    {
      name: String,
      message: String,
      date: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.model("Room", whatsappSchema);
