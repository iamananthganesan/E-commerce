const express = require("express");

const app = express();
const path = require("path")
const dotenv = require("dotenv");
const connectDatabse = require("./config/connectDB");
dotenv.config({ path: path.join(__dirname, "config", "config.env") })
const products = require("./routes/Products");
const orders = require("./routes/Orders");
connectDatabse();
app.use(express.json());
app.use("/api/v1",products);
app.use("/api/v1",orders);

//Server is listening to the port no 8000
app.listen(process.env.PORT, () => {
    console.log(process.env.PORT);
    console.log(`Server is running in port no ${process.env.PORT} for ${process.env.NODE_DEV_ENV} `);
})

