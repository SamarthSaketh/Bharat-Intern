const mongoose = require("mongoose");

const mongo_uri = `your-mongo-url-here`;

const clientOptions = {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
};

async function connectDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(mongo_uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log("DB Connection Failed: ", error);
  }
}

module.exports = connectDB;
