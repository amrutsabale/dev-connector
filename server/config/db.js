const mongoose = require("mongoose");
const config = require("./env-config");
const db = config.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDb connected");
  } catch (error) {
    console.error(error.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
