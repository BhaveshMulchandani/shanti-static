require("dotenv").config()
const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const connectdb = require("./config/db")
const webRoutes = require("./routes/web");
const cookieParser = require("cookie-parser");
const Service = require("./models/Service");
const conditions = require("./public/js/conditions");




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

app.get("/aesthetic", async (req, res) => {
     try {

        const services = await Service.find();

        res.render("aesthetic", {

            services,
            conditions

        });

    } catch (error) {

        console.log(error);

        res.status(500).send("Server Error");

    }

});

// Routes
app.use("/admin", adminRoutes);
app.use("/", webRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});