const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin.controller");
const isAdmin =
require("../middleware/isadmin");

router.get("/", adminController.renderLoginPage);

router.post(
  "/login",
  adminController.loginAdmin
);

router.get(
  "/dashboard",
  isAdmin,
  adminController.renderDashboard
);

router.get(
  "/services",
  isAdmin,
  adminController.getAllServices
);

router.get(
  "/appointments",
  isAdmin,
  adminController.getAppointments
);

// router.get(
//   "/blogs",
//   isAdmin,
//   adminController.getBlogs
// );

router.get(
  "/logout",
  adminController.logout
);


router.get(
  "/services/create",
  adminController.renderCreateServicePage
);

router.post(
  "/services/create",
  adminController.createService
);

router.get("/services", adminController.getAllServices);

router.post(
  "/appointment/create",
  adminController.createAppointment
);

// router.get(
//   "/create-admin",
//   adminController.createAdmin
// );

module.exports = router;