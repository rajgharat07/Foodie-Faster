import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex"
        >
          <div className="m-2 w-9/12">
            <div className="py-2">
              <span className="font-bold text-lg">
                {item?.card?.info?.name}
              </span>
              <span className="font-bold text-lg">
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="">{item?.card?.info?.description}</p>
          </div>
          <div>
            {item?.card?.info?.imageId && (
              <>
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt="category_image"
                  className="w-36 rounded-lg m-2"
                />
                <div className="m-2">
                  <button
                    className="p-2 bg-white shadow-lg mx-10 rounded-lg"
                    onClick={() => handleAddItem(item)}
                  >
                    Add +
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
