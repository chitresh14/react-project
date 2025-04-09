import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  // Local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData(); // call after the component render
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null'
    );

    const jsonData = await data.json();
    const reqData = jsonData?.data?.cards
      .filter((res, indx) => indx > 2)
      .map((resInfo) => resInfo?.card?.card?.info);

    setListOfRestaurants(reqData);
    setFilteredRestaurants(reqData);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredListRes = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredListRes);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((rest) => {
          return <RestaurantCard resData={rest} key={rest.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
