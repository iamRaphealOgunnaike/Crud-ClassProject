require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const connection = require("./db");
const userRoutes = require("../route/users");
const authRoutes = require("../route/auth");


// database connection 
connection()

//middlewares

app.use(express.json())
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


const port = process.env.Port||9090;
app.listen(port, ()=> console.log(`listening on port ${port}`))