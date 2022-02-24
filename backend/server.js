const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const userRoute = require("./routes/userRoutes");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 8000;

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
