
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const allRoutes = require("./routes/allRoutes");

dotenv.config();

const myServer = express();

connectDB();

myServer.use(express.json());


// const productRoutes = require("./routes/productRoutes"); 
// myServer.use("/api/products", productRoutes);

myServer.use("/api", allRoutes);

myServer.get("/run", (req, res) => {
    res.status(200).send("Yes, your backend is running!");
});

my

const port = process.env.PORT || 5000; 

myServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});