import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    if (!resId) {
      return;
    }
    fetchRestaurantMenu();
  }, [resId]);

  // Swiggy API Not working
  //   const fetchRestaurantMenu = async () => {
  //     const url =
  //       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.3623546&lng=76.97870759999999&restaurantId=" +
  //       resId;
  //     const data = await fetch(url);
  //     console.log("data", data);

  //     const json = await data.json();
  //     console.log("json", json);

  //     setResMenu(json.data.cards[2].card.card.info);
  //   };

  const fetchRestaurantMenu = async () => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/123456",
    );
    const json = await data.json();
    setResMenu(json.data.cards[2].card.card.info);
  };

  return {
    resMenu,
    test: "anju",
  };
};

export default useRestaurantMenu;
