require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorHandler");
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/dbConnection");

connectDB();

const app = express();

// mongoose.connect(process.env.CONNECTION_STRING,{ useNewUrlParser: true })
//     .then(()=>console.log("Connected to MongoDB"))
//     .catch((err)=> console.error(err));

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts" , contactRoutes);
app.use("/api/users" , userRoutes);
app.use(errorHandler);


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});

    