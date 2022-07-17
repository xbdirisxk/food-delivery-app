const Restaurant = require("../Models/restaurantModel");

/*get all restaurants*/
exports.getAll = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    if (!restaurants)
      return res.status(404).json({ error: "no retaurants found" });
    res.json({ result: restaurants.length, data: restaurants });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "error" });
  }
};

/*get one restaurant*/
exports.getOne = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant)
      return res.status(404).json({ error: "retaurant not found" });

    res.json({ result: restaurant });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "error" });
  }
};

/*create restaurant*/
exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const restaurant = await Restaurant.findOne({ name: req.body.name });
    if (restaurant)
      return res.status(404).json({ error: "retaurant name already exist" });

    // create restaurant
    await Restaurant.create(req.body);
    res.json({ success: "restaurant CREATED ✅" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
};

/*edit restaurant*/
exports.edit = async (req, res) => {
  try {
    await Restaurant.findOneAndUpdate(req.params.id, req.body);
    res.json({ success: "restaurant UPDATED" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "error" });
  }
};

/*delete restaurant*/
exports.delete = async (req, res) => {
  try {
    await Restaurant.findOneAndDelete(req.params.id, req.body);
    res.json({ success: "DELETED" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "error" });
  }
};
