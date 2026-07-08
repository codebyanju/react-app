import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";
import Accordian from "./Accordian";
import AccordianWithProps from "./AccordianWithProps";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleIndexExpand = (index) => {
    console.log("Clicked:", index);
    index === expandedIndex ? setExpandedIndex(null) : setExpandedIndex(index);
  };

  // Custom Hook
  const { resMenu, recommendedMenu, menuCards } = useRestaurantMenu(resId);

  if (resMenu === null) return <div>Loading...</div>;

  const { name, cuisines, avgRating, costForTwoMessage } = resMenu;

  return (
    <div>
      <div>
        {/* {resId} */}

        <div className="flex flex-col items-start my-6">
          <h2>{name}</h2>
          <div>{cuisines}</div>
          <div className="text-[rgb(17,102,73)] font-medium">{avgRating}⭐</div>
          <div>{costForTwoMessage}</div>
        </div>

        <div>
          {/* Uncontrolled Component */}
          <Accordian
            title={recommendedMenu.title}
            cardsData={recommendedMenu.itemCards}
          />
        </div>

        <div>
          {/* Controlled component */}
          {menuCards.map((item, index) => {
            return (
              <div key={item.categoryId}>
                <AccordianWithProps
                  title={item.title}
                  cardsData={item.itemCards}
                  expanded={expandedIndex === index}
                  handleIndexExpand={() => handleIndexExpand(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
