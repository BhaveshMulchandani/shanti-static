const express = require("express");
const router = express.Router();

const Service = require("../models/Service");
const webController = require("../controllers/web.controller");

router.get("/dental", webController.renderDentalPage);

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

module.exports = router;