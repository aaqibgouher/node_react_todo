const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected ...");
  } catch (error) {
    console.log(error, "DB connection failed");
  }
};

(async () => {
  await connectDB();
})();
