import { FaSearch, FaAngleRight } from "react-icons/fa";
import RestaurantCard from "../components/RestaurantCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/restaurant")
      .then((res) => setRestaurants(res.data.restaurants));
  });
  return (
    <div>
      {/* BANNER */}
      <div className="bg-[url('../public/food.jpg')] bg-bottom bg-no-repeat bg-cover h-[450px] flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl text-white font-black py-8">
            Food Delivery in Hargeisa
          </h2>
          <div className="flex">
            <div className="flex items-center bg-white p-3">
              <FaSearch size={20} className="mr-3" />
              <input
                type="text"
                placeholder="Search ...."
                className="outline-none w-96"
              />
            </div>
            <button className="bg-black text-white text-sm font-bold px-5">
              Search
            </button>
          </div>
        </div>
      </div>
      {/* BANNER */}
      {/* REST LIST */}
      <div className="p-10">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">Restaurants Near You</h2>
          <div className="flex items-center">
            <Link to="/list">
              <h2 className="font-bold text-sm">View All</h2>
            </Link>
            <FaAngleRight size={20} className="text-green-400" />
          </div>
        </div>
        <div className="grid grid-cols-2 py-2 gap-4">
          {restaurants.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} />
          ))}
        </div>
      </div>
      {/* REST LIST */}
    </div>
  );
}

export default Home;
