import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import restaurantsData from "../utils/data/restaurants.json";

const RestaurantHome = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const onlineStatus = useOnlineStatus();

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3623546&lng=76.97870759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    ); // wait for response
    const json = await data.json(); // wait for response to get parsed

    // LIVE API RESPONSE
    // const res =
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0],
    // );

    // STATIC DATA
    const staticData = restaurantsData;
    const res =
      staticData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    setResList(res);
    setFilteredResList(res);
  };

  useEffect(() => {
    fetchRestaurants();

    return () => {
      console.log("Res Home - useeffect unmount");
    };
  }, []);

  if (onlineStatus === false) {
    return (
      <h3>
        looks like yoou are offline. please check your internet connection!
      </h3>
    );
  }

  const filterTopRestaurants = () => {
    const filter = resList.filter((res) => res.info.avgRating > 4.5);
    setFilteredResList(filter);
  };

  const handleSearch = (e) => {
    const val = e.target.value.toLowerCase();
    setSearchValue(val);
    const searchResults = resList.filter((res) =>
      res.info.name.toLowerCase().includes(val),
    );

    setFilteredResList(searchResults);
  };

  if (filteredResList.length === 0) return <div>Loading....</div>;

  return (
    <div>
      Restaurant Home
      <div>
        <button onClick={filterTopRestaurants}>Top Rated Restaurants</button>
        <input type="text" value={searchValue} onChange={handleSearch} />
        <div className="res-card-container">
          {filteredResList.map((res) => (
            <Link to={"/res/" + res.info.id} key={res.info.id}>
              <RestaurantCard resData={res} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantHome;
