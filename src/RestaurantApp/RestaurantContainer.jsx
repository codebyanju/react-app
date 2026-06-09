import { Outlet } from "react-router-dom";
import RestaurantHeader from "./RestaurantHeader";

const RestaurantContainer = () => {
  return (
    <div>
      RestaurantContainer
      <div>
        <RestaurantHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default RestaurantContainer;
