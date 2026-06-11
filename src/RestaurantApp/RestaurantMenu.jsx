import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // Custom Hook
  const { resMenu } = useRestaurantMenu(resId);

  if (resMenu === null) return <div>Loading...</div>;

  const { name, cuisines, avgRating, costForTwoMessage } = resMenu;

  return (
    <div>
      {resId}
      <div>{name}</div>
      <div>{cuisines}</div>
      <div>{avgRating}</div>
      <div>{costForTwoMessage}</div>
    </div>
  );
};

export default RestaurantMenu;
