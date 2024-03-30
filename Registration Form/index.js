const express = require("express") //frame work of nodejs 
const mongoose = require("mongoose"); // library to import mongodb
const bodyParser = require("body-parser"); // make complex data readable from client to server 
const dotenv = require("dotenv"); // used to hide user credentials like password

const app = express (); //create an instance for express
dotenv.config();

const port = process.env.PORT || 3000;

const username = process.env.MONGODB_USERNAME;
const  password = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb+srv://saketh0329:${password}@cluster0.h8rtt99.mongodb.net/registrationformDB`, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
});

//registration schema
const registrationSchema = new mongoose.Schema({
    name: String,
    email : String,
    password : String
});

//mode of registration schema
const Registration = mongoose.model("Registration", registrationSchema);

app.use(bodyParser.urlencoded ({ extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
})

app.post("/register", async (req, res) => {
    try{
        const {name, email, password} =req.body;

        const registrationData = new Registration({
            name,
            email,
            password
        });
        await registrationData.save();
        res.redirect("/success");
    }
    catch (error){
        console.log(error);
        res.redirect("error");
    }
})

app.get("/success", (req, res)=>{
    res.sendFile (__dirname+"/pages/success.html");
})
app.get("/error", (req, res)=>{
    res.sendFile (__dirname+"/pages/error.html");
})


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});