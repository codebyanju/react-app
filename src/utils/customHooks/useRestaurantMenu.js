import { useState, useEffect } from "react";
import resMenuData from "../data/resMenu.json";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  // Swiggy API Not working
  const fetchRestaurantMenu = async () => {
    const url =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.3623546&lng=76.97870759999999&restaurantId=" +
      resId;
    // const data = await fetch(url);

    // LIVE API RESPONSE
    // console.log("data", data);

    // const json = await data.json();
    // console.log("json", json);

    // STATIC API DATA
    const json = resMenuData;
    console.log("resMenuData", resMenuData);
    setResMenu(json.data.cards[2].card.card.info);
  };

  // const fetchRestaurantMenu = async () => {
  //   const data = await fetch(
  //     "https://namastedev.com/api/v1/listRestaurantMenu/123456",
  //   );
  //   const json = await data.json();
  //   setResMenu(json.data.cards[2].card.card.info);
  // };

  useEffect(() => {
    if (!resId) {
      return;
    }
    fetchRestaurantMenu();
  }, [resId]);

  return {
    resMenu,
    test: "anju",
  };
};

export default useRestaurantMenu;
