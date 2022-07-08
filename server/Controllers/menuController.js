const Menu = require("../Models/menuModel");

/* get all Menu */
exports.getAll = async (req, res) => {
  try {
    const menu = await Menu.find({});
    if (!menu) return res.status(404).json({ messge: "no menu found" });

    res.json({ results: menu.length, data: menu });
  } catch (err) {
    res.status(400).json({ mssge: "Error" });
  }
};

/* add new Menu */
exports.add = async (req, res) => {
  try {
    const menu = await Menu.findOne({ name: req.body.name });
    if (menu)
      return res.status(400).json({ messge: "menu name already exist" });

    // create menu
    await Menu.create(req.body);
    res.json({ success: "Added ✅" });
  } catch (err) {
    res.status(400).json({ mssge: "Error" });
  }
};

/* edit Menu */
exports.edit = async (req, res) => {
  try {
    // update menu
    await Menu.findByIdAndUpdate(req.params.id, req.body);
    res.json({ success: "Here" });
  } catch (err) {
    res.status(400).json({ mssge: "Error" });
  }
};

/* delete Menu */
exports.remove = async (req, res) => {
  try {
    // remove  menu
    await Menu.findByIdAndDelete(req.params.id);
    res.json({ success: "Here" });
  } catch (err) {
    res.status(400).json({ mssge: "Error" });
  }
};
