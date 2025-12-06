const Contact = require("../models/Contact");

exports.createContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const savedMessage = await Contact.create({
      name,
      email,
      message,
    });
    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      data: savedMessage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Sent message",
      error: error.message,
    });
  }
};

exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    next(err);
  }
};
