import { Outlet } from "react-router-dom";
import RestaurantHeader from "./RestaurantHeader";

const RestaurantContainer = () => {
  return (
    <div>
      <p className="text-lg font-bold underline">RestaurantContainer</p>
      <div>
        <RestaurantHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default RestaurantContainer;
