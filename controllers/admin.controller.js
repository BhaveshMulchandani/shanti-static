const Service = require("../models/Service");

const renderCreateServicePage = (req, res) => {
  res.render("admin/create-service");
};

const createService = async (req, res) => {
  try {
    const {
      title,
      slug,

      icon,
      heroImage,
      featuredImage,

      shortDescription,
      heroDescription,
      content,

      benefits,

      costTitle,
      costDescription,

      faqQuestion1,
      faqAnswer1,
      faqQuestion2,
      faqAnswer2,

      metaTitle,
      metaDescription,
      ogImage,
    } = req.body;

    const service = await Service.create({
      title,
      slug,

      icon,
      heroImage,
      featuredImage,

      shortDescription,
      heroDescription,
      content,

      benefits: benefits
        ? benefits
            .split("\n")
            .map((item) => item.trim())
            .filter(Boolean)
        : [],

      costSection: {
        title: costTitle,
        description: costDescription,
      },

      faqs: [
        {
          question: faqQuestion1,
          answer: faqAnswer1,
        },
        {
          question: faqQuestion2,
          answer: faqAnswer2,
        },
      ].filter((faq) => faq.question && faq.answer),

      seo: {
        metaTitle,
        metaDescription,
        ogImage,
      },
    });

    res.redirect("/admin/services");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating service");
  }
};

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();

    res.render("admin/services", {
      services,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  renderCreateServicePage,
  createService,
  getAllServices,
};