const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const staffRoutes = require("./routes/staff.routes");
const { notFound , errorHandler} = require("./middleware/errorMiddleware");
dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is Running");
});

app.use("/api/user", userRoutes);
app.use("/api/staff", staffRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get('/api/chat', (req, res) => {
//     res.send(chats);
// });
 
// app.get('/api/chat/:id', (req, res) => {
//     const singleChat = chats.find((c) => c._id === req.params.id);
//     res.send(singleChat);
// });

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`server is running on PORT ${PORT}`));