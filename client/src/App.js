import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
