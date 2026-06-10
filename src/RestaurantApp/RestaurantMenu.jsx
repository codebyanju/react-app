import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState(null);

  const fetchRestaurantMenu = async () => {
    // const url =
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.3623546&lng=76.97870759999999&restaurantId=" +
    //   resId; //Swiggy API Not working

    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/123456",
    );
    console.log("await url", data);
    const json = await data.json();
    console.log("data.json()", json);
    setResMenu(json.data.cards[2].card.card.info);
  };
  console.log("menu", resMenu);

  useEffect(() => {
    if (!resId) {
      return;
    }
    fetchRestaurantMenu();
  }, [resId]);

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
