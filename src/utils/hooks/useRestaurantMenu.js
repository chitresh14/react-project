import { useEffect, useState } from 'react';
import { RESTAURANT_URL } from '../constants';

// Custom Hooks
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu(resId);
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_URL + resId);
    const jsonData = await data.json();
    setResInfo(jsonData?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
