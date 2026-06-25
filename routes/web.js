const express = require("express");
const router = express.Router();
const Service = require("../models/Service");
const blogs = require("../public/js/blogs")
const conditions = require("../public/js/conditions");
const webController = require("../controllers/web.controller");

router.get("/dental", webController.renderDentalPage);

router.get("/booking", (req, res) => {
  res.render("booking");
});

router.get("/booking-success", (req, res) => {
  res.render("booking-success");
});

router.get(
  "/about",
  webController.renderAboutPage
);

router.get(
  "/gallery",
  webController.renderGalleryPage
);

router.get(
  "/contactus",
  webController.renderContactPage
);

router.get(
  "/blog",
  webController.renderBlogPage
);

router.get("/blogs/:slug", async (req, res) => {

    try {

        const services = await Service.find();

        const blog = blogs.find(
            b => b.slug === req.params.slug
        );

        if (!blog) {
            return res.status(404).send("Blog Not Found");
        }

        res.render("blogdetail", {
            services,
            blog,
            blogs
        });

    } catch (error) {

        console.log(error);
        res.status(500).send("Server Error");

    }

});

router.get("/services/:slug", async (req, res) => {
  try {
    const service = await Service.findOne({
      slug: req.params.slug,
    });

    if (!service) {
      return res.status(404).send("Service Not Found");
    }

    res.render("service-details", {
      service,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

router.get("/conditions/:slug", async(req,res)=>{

const services=await Service.find();

const condition=conditions.find(

c=>c.slug===req.params.slug

);

if(!condition){

return res.status(404).send("Condition Not Found");

}

res.render("condition",{
services,
conditions,
condition

});

});

module.exports = router;