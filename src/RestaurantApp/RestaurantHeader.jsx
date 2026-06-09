import { Link } from "react-router-dom";

const RestaurantHeader = () => {
  return (
    <div>
      <ul className="header">
        <li>
          <Link to="/restaurant">Restaurant Home</Link>
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
      </ul>
    </div>
  );
};

export default RestaurantHeader;
