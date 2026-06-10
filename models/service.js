const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
        },

        featuredImage: {
            type: String,
        },

        galleryImages: [String],

        shortDescription: {
            type: String,
        },

        content: {
            type: String,
        },

        faqs: [
            {
                question: String,
                answer: String,
            },
        ],

        featuredImage: {
            type: String,
        },

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