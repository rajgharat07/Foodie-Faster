import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;
  const {
    id,
    name,
    cuisines,
    avgRating,
    sla,
    address,
    costForTwo,
    cloudinaryImageId,
    areaName,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-64 rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="h-60 w-full rounded-lg"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="Biryani_img"
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="mx-4 my-2 p-2 absolute bg-black text-white rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
