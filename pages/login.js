import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [userPhone, setUserPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      userPhone,
      password,
      callbackUrl: "http://localhost:3000", // automatic redirect after successful login
    });

    if (response?.error) {
      console.log("Error signing in:", response.error);
    } else {
      console.log("Logged in successfully!");
      // Handle successful login (e.g., redirect user to dashboard)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md w-full p-6 bg-gray-100 rounded shadow">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={(event) => handleLogin(event)}>
          <div className="mb-4">
            <label htmlFor="userPhone" className="block mb-2">
              User Phone
            </label>
            <input
              type="number"
              id="userPhone"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
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
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded focus:outline-none mb-4"
          >
            Login
          </button>
          <p>
            Not Have Account?{" "}
            <span>
              <Link
                href={"/register"}
                className="text-blue-700 hover:text-blue-800"
              >
                Create Account
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
