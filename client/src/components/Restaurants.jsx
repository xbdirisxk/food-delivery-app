import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    console.log("UseEffect Runninnnnnnng...");
    axios
      .get("http://localhost:8000/restaurant")
      .then((res) => setRestaurants(res.data.data));
  }, []);

  return (
    <div className="my-6 mx-10">
      <h1 className="mb-3 text-2xl font-bold">Popular Restaurant</h1>
      <div className="flex gap-2">
        {restaurants.slice(0, 4).map((item) => (
          <RestaurantCard key={item._id} restaurant={item} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
