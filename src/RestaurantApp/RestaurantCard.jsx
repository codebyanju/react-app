const RestaurantCard = (props) => {
  const { name, avgRating, cloudinaryImageId, cuisines, costForTwo } =
    props.resData.info;
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt={name}
      />
      <div>{name}</div>
      <div>{avgRating} ⭐</div>
      <div>{cuisines.join(", ")}</div>
      <div>{costForTwo}</div>
    </div>
  );
};

export default RestaurantCard;
