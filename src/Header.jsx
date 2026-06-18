import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div>
      <ul className="header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/cart">cart </Link>
        </li>
        <li>
          <Link to="/cart-reducer">cart-reducer</Link>
        </li>
        <li>
          <Link to="counter">Counter</Link>
        </li>
        <li>
          <Link to="/counter-reducer">counter-reducer</Link>
        </li>
        <li>
          <Link to="/res">Restaurant App</Link>
        </li>
        <li>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
      </ul>
    </div>
  );
};

export default Header;
