require('dotenv').config();
console.log("MongoDB URI:", process.env.MONGODB_URI);

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB using the URI from the .env file
mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to Database"))
.catch((error) => console.error("Error in connecting to the Database", error));

// Define a schema and model for the data
const dataSchema = new mongoose.Schema({
    Category: String,
    Amount: Number,
    Info: String,
    Date: Date
}, { collection: 'Data' });

const Data = mongoose.model('Data', dataSchema);

// API endpoint to add data
app.post("/add", async (req, res) => {
    const { category_select, amount_input, info, date_input } = req.body;

    console.log("Received Data:", { category_select, amount_input, info, date_input });

    const data = new Data({
        Category: category_select,
        Amount: amount_input,
        Info: info,
        Date: new Date(date_input)
    });

    try {
        await data.save();
        console.log("Record Inserted Successfully");
        res.status(200).send("Record inserted successfully");
    } catch (err) {
        console.error("Error saving data:", err);
        res.status(500).send("Error saving data to the database.");
    }
});

// Serve the index.html file correctly
app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    });
    res.sendFile(__dirname + '/public/index.html');
});

// Optionally create a test record on startup (comment this out if not needed)
const initialData = new Data({
    Category: "Test Category",
    Amount: 100,
    Info: "Test Info",
    Date: new Date()
});

initialData.save()
.then(() => console.log("Initial test record inserted"))
.catch(err => console.error("Error inserting test record:", err));

// Start the server
app.listen(5000, () => {
    console.log("Listening on port 5000");
});
