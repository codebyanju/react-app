const AccordianWithProps = ({
  title,
  cardsData,
  expanded,
  handleIndexExpand,
}) => {
  // const [expanded, setExpanded] = useState(false);

  // const handleExpand = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <div className="mb-4">
      <div>
        {/*Accordian Title */}
        <div
          className="flex justify-between cursor-pointer p-4 bg-gray-100 rounded-md"
          onClick={handleIndexExpand}
        >
          <div className="font-extrabold text-lg">
            {title} ({cardsData?.length})
          </div>
          {expanded ? "true" : "false"}
          <div> {expanded ? "▲" : "▼"}</div>
        </div>

        {/* Accordian Content */}
        {expanded &&
          cardsData.map((item) => {
            return (
              <div key={item.card.info.id} className="">
                <div className="flex justify-between my-2 p-4 ">
                  {/* Left */}

                  {/* Title */}
                  <div className="flex flex-col items-start">
                    {/* Name */}
                    <strong>{item.card.info.name}</strong>

                    {/* Price */}
                    <div>₹{item.card.info.price / 100}</div>

                    {/* Rating */}
                    {item.card.info.ratings.aggregatedRating.rating && (
                      <div className="text-[rgb(17,102,73)] font-medium">
                        {item.card.info.ratings.aggregatedRating.rating} ⭐
                      </div>
                    )}
                    {/* Description */}
                    <div>{item.card.info.description} </div>
                  </div>

                  {/* Right */}
                  {/* Image */}
                  <div>
                    <img
                      className="w-36 rounded-lg"
                      alt={item.card.info.name}
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                        item.card.info.imageId
                      }
                    />
                  </div>
                </div>
                <hr className="border border-[#d3d3d3]" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AccordianWithProps;
