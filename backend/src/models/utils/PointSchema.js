const { Schema } = require("mongoose");

const PointSchema = Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

module.exports = PointSchema;
