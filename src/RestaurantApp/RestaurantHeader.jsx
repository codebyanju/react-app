import { useState } from "react";
import { Link } from "react-router-dom";

const RestaurantHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <ul className="header">
        <li>
          <Link to="/res">Restaurant Home</Link>
        </li>
        <li>
          <Link to="about">About Us</Link>
        </li>
        <li>
          <Link to="contact">Contact Us</Link>
        </li>
        <li>
          <Link to="cart">cart </Link>
        </li>
        <button onClick={onToggle}>{isLoggedIn ? "Login" : "Logout"}</button>
      </ul>
    </div>
  );
};

export default RestaurantHeader;
