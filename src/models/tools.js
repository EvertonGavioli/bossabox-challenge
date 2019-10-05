const mongoose = require("mongoose");

const ToolsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true,
    validate: [noEmpty, "Path `tags` is required."]
  }
});

function noEmpty(val) {
  return val.length > 0;
}

ToolsSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("Tools", ToolsSchema);
