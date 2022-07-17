import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import RestaurantProfile from "./pages/RestaurantProfile";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/restaurant-profile" element={<RestaurantProfile />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </div>
  );
}

export default App;
