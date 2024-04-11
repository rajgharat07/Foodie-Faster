import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import data from "../utils/mockData1.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  console.log("Body Re-rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // const json = await data.json();

    // console.log(json);
    // json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    const json = data;
    console.log(
      json?.data?.success.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfRestaurant(
      json?.data?.success.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.success.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
  }
  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-gray-800 text-black">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black w-64 h-10 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 text-lg bg-green-200 m-4 rounded-lg hover:bg-green-400"
            onClick={() => {
              // Filter the Restaurant cards and update the ui
              //search Text
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              // setListOfRestaurant(filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 text-lg bg-gray-200 rounded-lg hover:bg-gray-400 hover:text-white"
            onClick={() => {
              // Filter logic here

              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 text-lg bg-gray-200 rounded-lg hover:bg-gray-400 hover:text-white"
            onClick={() => {
              const filteredListOfRestaurant = listOfRestaurants;
              setFilteredRestaurant(filteredListOfRestaurant);
            }}
          >
            See All Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant, index) => (
          <Link to={"/restaurant/" + restaurant.info.id} key={index}>
            {/* if the restaurant is promoted then add a promoted label to it */}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
