import { useState, useEffect } from "react";
import staticResMenuData from "../data/resMenu.json";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  const [recommendedMenu, setRecommendedMenu] = useState([]);
  const [menuCards, setMenuCards] = useState([]);

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
    const json = staticResMenuData;
    // console.log("resMenuData", staticResMenuData);
    setResMenu(json.data.cards[2].card.card.info);

    setRecommendedMenu(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card,
    );

    // console.log(
    //   "recommendedMenu",
    //   json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card,
    // );

    setMenuCards(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card
        .categories,
    );

    console.log(
      "MenuCards",
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card
        .categories,
    );
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
    recommendedMenu,
    menuCards,
    test: "anju",
  };
};

export default useRestaurantMenu;
