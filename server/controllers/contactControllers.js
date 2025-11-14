const Contact = require("../models/Contact");

exports.createContact = async (req, res, next) => {
  try {
    const { name, email, subject, message, saveToDb } = req.body;

    if (saveToDb) {
      await Contact.create({
        email,
        name,
        subject,
        message,
      });
    }

    //  const mailOptions = {
    //   from: process.env.EMAIL_USER,
    //   to: process.env.EMAIL_USER,
    //   subject:`Portfolio Contact: ${subject || 'New message'}`,
    //   text:` From: ${name} <${email}>\n\n${message}`
    // };

    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: "Message sent" });
  } catch (err) {
    next(err);
  }
};

exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Contact.find().sort({ createAt: -1 });
    res.json(messages);
  } catch (err) {
    next(err);
  }
};
