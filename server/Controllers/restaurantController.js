const restaurant = require("../Models/restaurantModel");

/* 
- check if exist
*/
exports.createRestaurant = (req, res) => {
  res.status.json({ mssge: "CREATED" });
};

/* 
- check if exist
- 
*/
exports.getRestaurant = (req, res) => {
  res.status.json({ mssge: "HEHE" });
};

/* 
- check if exist
- 
*/
exports.editRestaurant = (req, res) => {
  res.status.json({ mssge: "UPDATED" });
};

/* 
- check if exist
- 
*/
exports.deleteRestaurant = (req, res) => {
  res.status.json({ mssge: "DELETED" });
};
