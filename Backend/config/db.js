const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        let database = process.env.MONGO_URI;
        if (process.env.NODE_ENV === "testing") {
            database = process.env.MONGO_URI;
          }

        const conn = await mongoose.connect(database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log(`MongoDB connected: ${conn.connection.host}`)
      
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;
