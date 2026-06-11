const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // Card Icon
    icon: {
      type: String,
      default: "",
    },

    // Hero Banner Image
    heroImage: {
      type: String,
      default: "",
    },

    // Main Service Image
    featuredImage: {
      type: String,
      default: "",
    },

    // Gallery Images
    galleryImages: [String],

    // Card Description
    shortDescription: {
      type: String,
      default: "",
    },

    // Hero Subtitle
    heroDescription: {
      type: String,
      default: "",
    },

    // Main Content (CKEditor HTML)
    content: {
      type: String,
      default: "",
    },

    // Benefits Section
    benefits: [String],

    // Procedure Steps
    procedureSteps: [
      {
        title: String,
        description: String,
      },
    ],

    // Cost Information
    costSection: {
      title: String,
      description: String,
    },

    // FAQs
    faqs: [
      {
        question: String,
        answer: String,
      },
    ],

    // Testimonials
    testimonials: [
      {
        name: String,
        review: String,
      },
    ],

    // SEO
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
      ogImage: String,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);