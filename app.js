const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
require("dotenv").config()
const connectdb = require("./config/db")
const webRoutes = require("./routes/web");
const cookieParser = require("cookie-parser");




connectdb()

// Form data read karne ke liye
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// EJS set karna padega
app.set("view engine", "ejs");

app.get('/',(req,res) => {
  res.render("index")
})

app.get("/aesthetic", (req, res) => {
  res.render("aesthetic");
});

// Routes
app.use("/admin", adminRoutes);
app.use("/", webRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});