//DB-config

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    });

    console.log("Database connected..!!");
  } catch (error) {
    console.error("database connection error", error.message);
    process.exit(1)
  }
};

module.exports = connectDB;
