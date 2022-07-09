import { useState } from "react";

const CreateRestaurant = () => {
  const [inputs, setInputs] = useState({
    name: "",
    city: "",
    address: "",
    imgUrl: "",
    phone: 0,
  });

  const handleSubmit = () => null;

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-extrabold text-red-800">Sign Up</h2>
      <div className="flex flex-col justify-center gap-2 m-2">
        <input
          type="text"
          placeholder="username"
          className="input"
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="input"
          onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          className="input"
          onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
        />
        <input
          type="password"
          placeholder="confirm password"
          className="input"
          onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
        />
      </div>
      <button
        className="bg-gray-300 rounded-md px-2 py-1"
        onClick={handleSubmit}
      >
        create
      </button>
    </div>
  );
};

export default CreateRestaurant;
