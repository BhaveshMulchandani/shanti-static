const Service = require("../models/Service");

const renderDentalPage = async (req, res) => {
  try {
    const services = await Service.find();

    res.render("dental", {
      services,
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
      services
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
        services
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
  renderContactPage
};