const Restaurant = require("../Models/restaurantModel");

/*get all restaurants*/
exports.getAll = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    if (!restaurants)
      return res.status(404).json({ mssge: "no retaurants found" });
    res.json({ result: restaurants.length, data: restaurants });
  } catch (err) {
    console.log(err);
    res.status(400).json({ mssge: "error" });
  }
};

/*get one restaurant*/
exports.getOne = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant)
      return res.status(404).json({ mssge: "retaurant not found" });

    res.json({ sucess: restaurant });
  } catch (err) {
    console.log(err);
    res.status(400).json({ mssge: "error" });
  }
};

/*create restaurant*/
exports.create = async (req, res) => {
  try {
    console.log(zreq.body);
    const restaurant = await Restaurant.findOne({ name: req.body.name });
    if (restaurant)
      return res.status(404).json({ mssge: "retaurant name already exist" });

    // create restaurant
    await Restaurant.create(req.body);
    res.json({ success: "restaurant CREATED ✅" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ mssge: err });
  }
};

/*edit restaurant*/
exports.edit = async (req, res) => {
  try {
    await Restaurant.findOneAndUpdate(req.params.id, req.body);
    res.json({ mssge: "restaurant UPDATED" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ mssge: "error" });
  }
};

/*delete restaurant*/
exports.delete = async (req, res) => {
  try {
    await Restaurant.findOneAndDelete(req.params.id, req.body);
    res.json({ mssge: "DELETED" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ mssge: "error" });
  }
};
