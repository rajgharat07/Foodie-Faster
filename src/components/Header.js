import { LOGO_URL } from "../utils/constants.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [darkMode, setDarkMode] = useState(true); // State for dark mode
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex justify-between ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="logo-container">
        <img
          className="w-28 m-2 rounded-2xl"
          src={LOGO_URL}
          alt="Foodie_Logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-xl">
            Online Status : {onlineStatus ? "✅" : "❌"}
          </li>
          <li
            className={`px-4 text-xl ${
              darkMode ? "hover:text-orange-400" : "hover:text-orange-400"
            } ${
              darkMode
                ? "hover:underline-gradient-dark"
                : "hover:underline-gradient"
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`px-4 text-xl ${
              darkMode ? "hover:text-orange-400" : "hover:text-orange-400"
            } ${
              darkMode
                ? "hover:underline-gradient-dark"
                : "hover:underline-gradient"
            }`}
          >
            <Link to="/about">About Us</Link>
          </li>
          <li
            className={`px-4 text-xl ${
              darkMode ? "hover:text-orange-400" : "hover:text-orange-400"
            } ${
              darkMode
                ? "hover:underline-gradient-dark"
                : "hover:underline-gradient"
            }`}
          >
            <Link to="/contact">Contact Us</Link>
          </li>
          <li
            className={`px-4 font-bold text-xl ${
              darkMode ? "hover:text-orange-400" : "hover:text-orange-400"
            } ${
              darkMode
                ? "hover:underline-gradient-dark"
                : "hover:underline-gradient"
            }`}
          >
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className={`login text-xl ${
              darkMode ? "hover:text-orange-400" : "hover:text-orange-400"
            } ${
              darkMode
                ? "hover:underline-gradient-dark"
                : "hover:underline-gradient"
            }`}
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <button
            onClick={toggleDarkMode}
            className="ml-4 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md text-black"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
