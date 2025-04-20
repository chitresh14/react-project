import { CDN_URL } from '../utils/constants';

const ItemList = ({ categoryItems }) => {
  return (
    <div className="m-0 p-0">
      {categoryItems.map((item) => (
        <div
          className="m-0 p-4 flex justify-between"
          key={item?.card?.info?.id}
        >
          <div className="content-center px-5 w-10/12">
            <div className="text-left">
              <span className="py-2">{item?.card?.info?.name} </span>
              <span>
                - <span>&#x20B9;</span>
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-left">{item?.card?.info?.description}</p>
          </div>
          <div className="w-2/12">
            <button className="bg-black text-white rounded-lg p-2 absolute cursor-pointer hover:bg-amber-50 hover:text-black hover:font-bold">
              Add +
            </button>
            <img
              className="w-full"
              src={CDN_URL + item?.card?.info?.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
