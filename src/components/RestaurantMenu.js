import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/hooks/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [isItemVisible, setIsItemVisible] = useState(false);
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    avgRatingString,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  const itemCatergories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
  const handleClick = (index) => {
    console.log('index::', index);
    setIsItemVisible(!isItemVisible);
    setShowIndex(index);
    console.log('isItemVisible:::', isItemVisible);
    console.log('showIndex::', showIndex);
  };

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      {/* We want categories with accordian */}
      {itemCatergories.map((category, index) => {
        return (
          // controlled component
          <div key={category?.card?.card.title}>
            isItemVisible:: {isItemVisible.toString()}
            showIndex:: {showIndex}
            <RestaurantCategory
              key={category?.card?.card.categoryId}
              categoryData={category?.card?.card}
              showItems={index === showIndex ? true : false}
              isCategoryItemsVisible={isItemVisible}
              handleCatergoryClick={() => handleClick(index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
