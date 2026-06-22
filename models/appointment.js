const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    department: {
      type: String,
      enum: ["Skin", "Dental"],
      required: true,
    },

    service: {
      type: String,
      required: true,
    },

    appointmentDate: {
      type: Date,
      required: true,
    },

    slot: {
      type: String,
      required: true,
    },

    notes: {
      type: String,
      default: "",
    },

    reminderStatus: {
      type: String,
      enum: ["pending", "reminded"],
      default: "pending",
    },

    visitStatus: {
      type: String,
      enum: ["pending", "visited", "non-visited"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Appointment", appointmentSchema);