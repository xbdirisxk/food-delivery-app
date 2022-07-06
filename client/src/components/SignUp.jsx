import { useState } from "react";
import { Link } from "react-router-dom";

const axios = require("axios");

const SignUp = () => {
  const [inputs, setInput] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async () => {
    console.log(inputs);
    try {
      const res = await axios.post("http://localhost:8000/user/signup", inputs);
      console.log("res:", res.data);

      /* reset form inputs */
      setInput({ username: "", email: "", password: "", confirmPassword: "" });
    } catch (err) {
      console.log("error:", err.response.data);
    }
  };

  return (
    <div className="antialiased bg-gradient-to-br from-green-100 to-white">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          {/* left side - logo */}
          <div className="flex flex-col w-full">
            <div>
              <svg
                className="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <h1 className="text-5xl text-gray-800 font-bold">Fast Food</h1>
            <p className="hidden w-5/12 text-gray-500 mx-auto md:mx-0 mb-2 md:block ">
              Delivering happiness to your home.
            </p>
          </div>

          {/* right side - login form */}

          <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
            <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 className="text-3xl font-bold text-gray-800 text-left mb-3">
                Sigup
              </h2>
              <form action="" className="w-full">
                <div id="input" className="flex flex-col w-full my-3">
                  <label htmlFor="username" className="text-gray-500 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={inputs.username}
                    placeholder="Username"
                    className="signup-input"
                    onChange={(e) =>
                      setInput({ ...inputs, username: e.target.value })
                    }
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-3">
                  <label htmlFor="email" className="text-gray-500 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={inputs.email}
                    placeholder="Email"
                    className="signup-input"
                    onChange={(e) =>
                      setInput({ ...inputs, email: e.target.value })
                    }
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-3">
                  <label htmlFor="password" className="text-gray-500 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={inputs.password}
                    placeholder="password"
                    className="signup-input"
                    onChange={(e) =>
                      setInput({ ...inputs, password: e.target.value })
                    }
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-3">
                  <label
                    htmlFor="confirm-password"
                    className="text-gray-500 mb-1"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    value={inputs.confirmPassword}
                    placeholder="confirm password"
                    className="signup-input"
                    onChange={(e) =>
                      setInput({ ...inputs, confirmPassword: e.target.value })
                    }
                  />
                </div>
                <div id="button" className="flex flex-col w-full my-5">
                  <button
                    type="button"
                    className="w-full py-4 bg-green-600 rounded-lg text-green-100"
                  >
                    <div
                      className="flex flex-row items-center justify-center"
                      onClick={handleSubmit}
                    >
                      <div className="mr-2">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          ></path>
                        </svg>
                      </div>
                      <div className="font-bold">Signup</div>
                    </div>
                  </button>
                  <div className="flex justify-center mt-5">
                    <Link
                      to="/login"
                      className="font-medium text-gray-500 hover:underline"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* ------------------------------------ */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;

/* 

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
*/
