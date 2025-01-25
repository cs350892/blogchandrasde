import { useState } from "react"; 
import { Link } from "react-router-dom";
import FooterCom from "../components/Footer"; 
import { BsFacebook } from 'react-icons/bs'; 
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; 
import { Footer } from "flowbite-react"; // Added import for Footer

const Signin = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      const res = await fetch("http://localhost:3000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (res.ok) {
        alert("Sign up successful!");
      } else {
        alert("Sign up failed: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-100 px-4">
      <div className="flex justify-center items-center flex-grow bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 text-center md:text-left">
          <Link to="/" className="text-4xl font-semibold text-gray-800 dark:text-white">
            <span className="px-2 py-1 bg-purple-500 text-white rounded-lg">ChandraSDE's</span>
          </Link>
          <p className="text-gray-600 mt-4 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
            assumenda perferendis. Repudiandae officia a ab cupiditate ratione
            voluptatem id assumenda quibusdam, nisi quis doloremque
            necessitatibus, aliquam cum sunt! Suscipit, molestiae.
          </p>
        </div>

        {/* Right Section - Signup Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label className="block text-gray-600">Your username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={handleChange}
                value={formData.username}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600">Your email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-600">Your password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={handleChange}
                value={formData.password}
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      
      {/* Footer with Social Icons */}
      <Footer.Divider />
      <div className="flex justify-center space-x-6 py-4">
        {/* Social Icons */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
          <BsFacebook size={24} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700">
          <FaLinkedin size={24} />
        </a>
      </div>

      <FooterCom />
    </div>
  );
};

export default Signin;
