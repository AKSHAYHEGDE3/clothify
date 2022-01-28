const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require('cors');
dotenv.config()

const app = express();

const mongodb = process.env.MONGO_URL

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

mongoose.connect(mongodb,{useNewUrlParser: true,  useUnifiedTopology: true  }).
then(()=>{console.log("connected to DB")}).
catch(err=>console.log(err))

app.use(express.json())

//ROUTES

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const stripeRoutes = require("./routes/stripe");

app.use("/api/auth",authRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api",stripeRoutes)

app.listen(process.env.PORT || 5000,()=>{
    console.log("server is running")
})

