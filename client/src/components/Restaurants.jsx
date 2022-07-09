import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const axios = require("axios");

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    console.log("UseEffect Runninnnnnnng...");
    axios
      .get("http://localhost:8000/restaurant")
      .then((res) => setRestaurants(res.data.data));
  }, []);

  // why useEffect rerender four times ?
  console.log(restaurants);

  return (
    <div className="flex gap-2 my-6 mx-10">
      {restaurants.slice(0, 4).map((item) => (
        <RestaurantCard key={item._id} restaurant={item} />
      ))}
    </div>
  );
};

export default Restaurants;
