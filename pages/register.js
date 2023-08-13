import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isValidPhoneNumber(phone)) {
      setError(
        "Invalid phone number. Please enter a valid 11-digit phone number starting with '01'."
      );
      return;
    }

    setError("");
    try {
      const response = await axios.post(`/api/user-registration`, {
        name,
        phone,
        password,
      });
      router.push("/login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(
          "Phone number already registered. Please use a different number."
        );
      } else {
        setError("Error registering. Please try again later.");
      }
      // Handle registration error (e.g., show error message)
      console.error("Error registering:", error);
    }
  };

  // Function to check if the phone number is valid
  const isValidPhoneNumber = (phoneNumber) => {
    return /^01\d{9}$/.test(phoneNumber);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md w-full p-6 bg-gray-100 rounded shadow">
        <h1 className="text-2xl font-semibold mb-4">Register</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">
              Phone Number
            </label>
            <input
              type="tel" // Use type "tel" for phone number inputs
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded focus:outline-none"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
