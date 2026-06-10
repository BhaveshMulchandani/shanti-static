const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin.controller");

router.get(
  "/services/create",
  adminController.renderCreateServicePage
);

router.post(
  "/services/create",
  adminController.createService
);

module.exports = router;