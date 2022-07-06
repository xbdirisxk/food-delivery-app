import { useState } from "react";
const axios = require("axios");

const SignUp = () => {
  const [inputs, setInput] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async () => {
    // console.log(input)
    try {
      const res = await axios.post("http://localhost:8000/user/signup", inputs);
      console.log("res:", res.data);
    } catch (err) {
      console.log("error:", err.response);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-extrabold text-red-800">Sign Up</h2>
      <div className="flex flex-col justify-center gap-2 m-2">
        <input
          type="text"
          placeholder="username"
          className="input"
          onChange={(e) => setInput({ ...inputs, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="input"
          onChange={(e) => setInput({ ...inputs, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          className="input"
          onChange={(e) => setInput({ ...inputs, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="confirm password"
          className="input"
          onChange={(e) =>
            setInput({ ...inputs, confirmPassword: e.target.value })
          }
        />
      </div>
      <button
        className="bg-gray-300 rounded-md px-2 py-1"
        onClick={handleSubmit}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
