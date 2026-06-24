const Service = require("../models/Service");
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Appointment = require("../models/appointment");

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

const renderLoginPage = (req,res) => {
    res.render("admin/login");
};

const getAppointments = async (req,res) => {

  try {

    const appointments =
    await Appointment.find()
      .sort({
        appointmentDate: 1
      });

    return res.render(
      "admin/appointments",
      {
        appointments,
        pageTitle:"Appointments"
      }
    );

  } catch(error){

    console.error(error);

    return res.status(500).send(
      "Server Error"
    );
  }
};

const loginAdmin = async (req,res) => {

  try {

    const { email,password } = req.body;

    const admin =
    await Admin.findOne({ email });

    if(!admin){
      return res.render(
        "admin/login",
        {
          error:"Invalid Credentials"
        }
      );
    }

    const isMatch =
    await bcrypt.compare(
      password,
      admin.password
    );

    if(!isMatch){
      return res.render(
        "admin/login",
        {
          error:"Invalid Credentials"
        }
      );
    }

    const token = jwt.sign(
      {
        id:admin._id,
        email:admin.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn:"7d"
      }
    );

    res.cookie(
      "token",
      token,
      {
        httpOnly:true,
        maxAge:
        7 * 24 * 60 * 60 * 1000
      }
    );

    res.redirect(
      "/admin/dashboard"
    );

  } catch(err){

    console.log(err);

    res.status(500).send(
      "Server Error"
    );
  }
};

const renderDashboard = (req,res) => {
    res.render(
        "admin/dashboard"
    );
};

const logout = (req,res) => {

  res.clearCookie("token");

  res.redirect("/admin");
};

const createAppointment =
async (req, res) => {

  try {

    console.log(req.body)

    const {
      patientName,
      mobileNumber,
      age,
      gender,
      department,
      service,
      appointmentDate,
      slot,
      notes
    } = req.body;

    console.log(req.body)
    // Prevent duplicate slot booking

    const existingAppointment =
    await Appointment.findOne({
      appointmentDate,
      slot,
      department
    });

    if (existingAppointment) {

      return res.status(400).json({
        success: false,
        message:
          "This slot is already booked."
      });

    }

    const appointment =
    await Appointment.create({
      patientName,
      mobileNumber,
      age,
      gender,
      department,
      service,
      appointmentDate,
      slot,
      notes
    });

          console.log(appointment)

    return res.status(201).json({
      success: true,
      appointment,
    });

  } catch (error) {

    console.error(
      "Create Appointment Error:",
    );

    console.error(error)

    return res.status(500).json({
      success: false,
      message:
        "Unable to create appointment."
    });

  }
};

module.exports = {
  renderCreateServicePage,
  createService,
  getAllServices,
  renderLoginPage,
  loginAdmin,
  renderDashboard,
  logout,
  getAppointments,
  createAppointment,
};