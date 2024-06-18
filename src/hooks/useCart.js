import callAxios from "@/service/callApi";
import { setShowLoginPopup } from "@/store/authSlice";
import { setCartItems } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function useCart() {
  const { token } = useSelector((state) => state.auth);
  const { items: cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getCartItems = async () => {
    if (!token) {
      return;
    }

    const res = await callAxios.get("/cart-items", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setCartItems(res.data && res.data.length > 0 ? res.data : []));
  };

  const addToCart = async (product_id, quantity = 1) => {
    if (token) {
      const res = await callAxios.post(
        "/add-to-cart",
        {
          product_id,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Product added to the cart");
      dispatch(setCartItems(res.data && res.data.length > 0 ? res.data : []));
    } else {
      toast.error("Please login to add item to cart");
      dispatch(setShowLoginPopup(true));
    }
  };

  const removeItemFromCart = async (cartItemId) => {
    if (token) {
      const res = await callAxios.delete(`/remove-cart-items/${cartItemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Product has been removed from cart");
      dispatch(setCartItems(res.data && res.data.length > 0 ? res.data : []));
    }
  };

  return { cartItems, getCartItems, addToCart, removeItemFromCart };
}
