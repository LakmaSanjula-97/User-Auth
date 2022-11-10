const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const staffRoutes = require("./routes/staff.routes");
const messageRouter = require("./routes/message.routes");
const fileUploadRouter = require("./routes/file.routes");
const { notFound , errorHandler} = require("./middleware/errorMiddleware");

// const https = require("https");
// const path = require("path");
// const fs = require("fs");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is Running");
});

app.use("/api/staff", staffRoutes);
app.use("/api/message", messageRouter);
app.use("/api/file", fileUploadRouter());

app.use(notFound);
app.use(errorHandler);



const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`server is running on PORT ${PORT}`));