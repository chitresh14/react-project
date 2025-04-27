import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { useContext, useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';
import UserContext from '../utils/contexts/UserContext';

const Body = () => {
  // Local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData(); // call after the component render
  }, []);
  const { loggedInUser, setUserName } = useContext(UserContext);

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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks you are Offline!!. Please check you internet connection.</h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 cursor-pointer rounded-lg"
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
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.avgRating >= 4.5
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <div className="items-center mx-2">
            <label>User Name</label>
            <input
              className="p-2 border border-solid"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((rest) => {
          return (
            <Link key={rest.id} to={'/restaurants/' + rest.id}>
              {rest?.promoted ? (
                <RestaurantCardPromoted resData={rest} />
              ) : (
                <RestaurantCard resData={rest} />
              )}
            </Link>
          );
        })}
      </div>
      <iframe
        className="react-life w-full"
        src="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"
      ></iframe>
    </div>
  );
};

export default Body;
