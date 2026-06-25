const Service = require("../models/Service");
const blogs = require("../public/js/blogs")
const conditions = require("../public/js/conditions");

const renderDentalPage = async (req, res) => {
  try {
    const services = await Service.find();

    res.render("dental", {
      services,
      conditions
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

const renderAboutPage = async (req,res) => {

  try {

    const services =
    await Service.find();

    res.render("about", {
      services,
      conditions
    });

  } catch(error){

    console.log(error);

    res.status(500).send(
      "Server Error"
    );
  }
};

const renderGalleryPage = async (req,res) => {

  try {

    const services =
    await Service.find();

    res.render("gallery", {
      services,
      conditions
    });

  } catch(error){

    console.log(error);

    res.status(500).send(
      "Server Error"
    );
  }
};

const renderBlogPage = async (req,res) => {

  try {

    const services =
    await Service.find();

    res.render("blog", {
      services,
      blogs,
      conditions
    });

  } catch(error){

    console.log(error);

    res.status(500).send(
      "Server Error"
    );
  }
};

const renderContactPage = async (req, res) => {

  try {

    const services =
    await Service.find();

    res.render(
      "contactus",
      {
        services,
        conditions
      }
    );

  } catch (error) {

    console.log(error);

    res.status(500).send(
      "Server Error"
    );

  }

};

module.exports = {
  renderDentalPage,
  renderAboutPage,
  renderGalleryPage,
  renderContactPage,
  renderBlogPage
};