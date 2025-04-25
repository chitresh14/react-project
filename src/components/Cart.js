import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleCartClear = () => {
    // Logic to clear the cart
    dispatch(clearCart());
  };

  return (
    <div className="text-center my-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length > 0 && (
          <button
            className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer hover:font-bold"
            onClick={handleCartClear}
          >
            Clear Cart
          </button>
        )}

        {cartItems.length === 0 ? (
          <h1 className="text-lg my-4">Your cart is empty</h1>
        ) : (
          <ItemList categoryItems={cartItems} isCart={true} />
        )}
      </div>
    </div>
  );
};

export default Cart;
