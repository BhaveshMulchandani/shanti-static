const Service = require("../models/Service");

const renderCreateServicePage = (req, res) => {
  res.render("admin/create-service");
};

const createService = async (req, res) => {
  try {
    const {
      title,
      slug,
      featuredImage,
      shortDescription,
      content,
      metaTitle,
      metaDescription,
    } = req.body;

    await Service.create({
      title,
      slug,
      featuredImage,
      shortDescription,
      content,
      seo: {
        metaTitle,
        metaDescription,
      },
    });

    res.redirect("/admin/services");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating service");
  }
};

module.exports = {
  renderCreateServicePage,
  createService,
};