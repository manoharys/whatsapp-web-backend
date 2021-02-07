import Messages from "../model/schema.js";

//post data

export const postMessage = async (req, res) => {
  try {
    const postData = req.body;
    const posts = Messages(postData);
    await posts.save();
    res.status(201).json(posts);
  } catch (error) {
    res.status(500).json({ Messages: error });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Messages.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
};
