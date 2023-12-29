require("dotenv").config()
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();
app.use(
  cors({
    origin: "https://fash-store.vercel.app",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded( ));
app.use(cookieParser());

app.use("/api/users", require("./routes/user"));
app.use("/api/category", require("./routes/category"));
app.use("/api/products", require("./routes/products"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/orders", require("./routes/order"))



mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  
}).then(() => {
  console.log("DB Connected")
}).catch( error => console.log(error))



const PORT = process.env.PORT || 4000;



app.listen(PORT, () => {
  console.log("Server is running ");
});
