const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: "chua cap nhat"
    },
    price: {
      type: Number,
      required: true
    },
    categoryId: {
      type: String,
      required: true
    },
    color: {
      type: [String],
      required: true
    },
    images: {
      type: [String],
      required: true
    },
    dateAdded: {
      type: Date,
      required: false,
      default: Date.now
    },
    isSale: {
      status: {
        type: Boolean,
        default: false
      },
      percent: {
        type: Number,
        default: 0
      },
      end: {
        type: Date
      }
    },
    buyCounts: {
      type: Number,
      required: false,
      default: 0
    },
    viewCounts: {
      type: Number,
      required: false,
      default: 0
    },
    rating: {
      byUser: String,
      content: String,
      star: Number
    },
    comment: {
      total: {
        type: Number,
        require: false,
        default: 0
      },
      items: [
        {
          title: {
            type: String
          },
          content: {
            type: String
          },
          name: {
            type: String
          },
          date: {
            type: Date,
            default: Date.now
          },
          star: {
            type: Number
          }
        }
      ]
    }
  });

  const Product = mongoose.model('Product', productSchema,'product');
  module.exports = Product;
