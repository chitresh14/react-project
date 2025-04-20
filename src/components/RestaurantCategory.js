import ItemList from './ItemList';

const RestaurantCategory = ({
  categoryData,
  showItems,
  handleCatergoryClick,
  isCategoryItemsVisible,
}) => {
  const { categoryId, itemCards, title } = categoryData;

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleCatergoryClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        :::{showItems.toString()}
        {/* Accordion Body */}
        {showItems && isCategoryItemsVisible && (
          <ItemList categoryItems={itemCards} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
