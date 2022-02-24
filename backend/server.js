const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const userRoute = require("./routes/userRoutes");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.send({ message: "Welome to the Support Desk API" });
});

app.use("/api/users", userRoute);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
