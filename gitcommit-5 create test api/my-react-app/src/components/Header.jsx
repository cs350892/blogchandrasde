import "flowbite/dist/flowbite.css";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai"; // Search Icon
import { FaMoon, FaSun } from "react-icons/fa"; // Moon & Sun Icons
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark"); // Add dark mode class
    } else {
      document.documentElement.classList.remove("dark"); // Remove dark mode class
    }
  };

  return (
    <Navbar className="border-b-2 flex justify-between items-center p-4 bg-white dark:bg-gray-900">
      {/* Left Side - ChandraSDE's */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span  className="px-2 py-1 bg-purple-500 rounded-lg">
          ChandraSDE's
        </span>
      </Link>

      <form className="flex items-center border rounded-lg px-3 py-1 bg-gray-100 dark:bg-gray-800">
        <AiOutlineSearch className="text-gray-500 text-xl mr-2 cursor-pointer" />
        <TextInput
          type="text"
          placeholder="Search..."
          className="bg-transparent border-none focus:ring-0 w-64"
        />
      </form>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition duration-300"
      >
        {darkMode ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-xl" />}
      </button>

      <Link to="sign-in">
      <Button gradientDuoTone="purpleToBlue">Sign-in</Button>
      </Link>
      <Navbar.Toggle></Navbar.Toggle>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/contact">Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
