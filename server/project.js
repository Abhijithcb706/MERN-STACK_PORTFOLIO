const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/errorHandler");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("MERN Portfolio Backend is running ✅");
});


// Routes
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/portfolio/experience", require("./routes/experienceRoutes"));
app.use("/api/contact/", require("./routes/contactRoutes"));
app.use("/api/hero/", require("./routes/heroRoutes"));
app.use("/api/admin", require("./routes/authRoutes"));
app.use("/api/upload",require('./routes/uploadRoutes'))

app.use(errorHandler);

// app.get("/error-test", (req, res, next) => {
//   next(new Error("Testing error handler"));
//   console.log("error",err);
  
// });


app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
