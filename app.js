const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
require("dotenv").config()
const connectdb = require("./config/db")


connectdb()

// Form data read karne ke liye
app.use(express.urlencoded({ extended: true }));

// EJS set karna padega
app.set("view engine", "ejs");

// Routes
app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});