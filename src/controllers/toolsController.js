const Tools = require("../models/tools");

//GET - list all registered tools OR filter tools by tags
exports.tools_list = async function(req, res) {
  try {
    const { tag } = req.query;

    let tools;

    if (tag) {
      tools = await Tools.find({ tags: tag });
    } else {
      tools = await Tools.find();
    }

    return res.json(tools);
  } catch (err) {
    return res.status(500).json({ error: "Tools List Failed" });
  }
};

//POST - Create a new Tool
exports.tools_create = async function(req, res) {
  try {
    const tool = await Tools.create(req.body);

    return res.status(201).json(tool);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: err.message });
    } else {
      return res.status(500).json({ error: "Tools Create Failed." });
    }
  }
};

//DELETE - Delete a tool by id
exports.tools_delete = async function(req, res) {
  try {
    await Tools.findByIdAndRemove(req.params.id);
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ error: "Tools Delete Failed" });
  }
};
