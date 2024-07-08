import useCart from "@/hooks/useCart";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardImage } from "..";

export default function MiniCart({ showMiniCart, setShowMiniCart }) {
  const { token } = useSelector((state) => state.auth);
  const { items: cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { addToCart, removeItemFromCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleQuantity = async (cartItemId, productId, quantity) => {
    if (loading) return;
    setLoading(true);
    await addToCart(productId, quantity);
    setLoading(false);

    setTimeout(() => {
      if (cartItems.length == 0) {
        setShowMiniCart(false);
      }
    }, 1000);
  };

  const removeFromCart = async (cartItemId) => {
    setLoading(true);
    await removeItemFromCart(cartItemId);
    setLoading(false);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (curr, acc) => (curr += acc.product.price * acc.quantity),
      0
    );
    return total;
  };

  return (
    <Transition show={showMiniCart}>
      <Dialog className="relative z-10" onClose={setShowMiniCart}>
        <TransitionChild
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur duration-300 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900">
                          My Shopping Cart
                        </DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setShowMiniCart(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartItems.length == 0 && (
                              <li className="py-12 text-secondary flex justify-center">
                                No products found on your cart.
                              </li>
                            )}
                            {cartItems.length > 0 &&
                              cartItems.map((item, key) => (
                                <li key={item._id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <CardImage
                                      src={item.product.thumbnail}
                                      alt={item.product.title}
                                      height={500}
                                      width={500}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={item.href}>
                                            {item.product.title}
                                          </a>
                                        </h3>
                                        <p className="ml-4">
                                          ${item.product.price}
                                        </p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-700">
                                        {item.product.brand}
                                      </p>
                                      {/* <p className="mt-1 text-xs text-gray-500">
                                      <small>{item.product.description}</small>
                                    </p> */}
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="flex items-center gap-2 text-gray-900 font-semibold">
                                        <button
                                          type="button"
                                          disabled={loading}
                                          onClick={() =>
                                            handleQuantity(
                                              item._id,
                                              item.product._id,
                                              -1
                                            )
                                          }
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-4"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M5 12h14"
                                            />
                                          </svg>
                                        </button>
                                        <input
                                          type="text"
                                          readOnly
                                          name="quantity"
                                          id="quantity"
                                          className="w-14 h-8 text-center rounded border-gray-400"
                                          value={item.quantity}
                                        />
                                        <button
                                          type="button"
                                          disabled={loading}
                                          onClick={() =>
                                            handleQuantity(
                                              item._id,
                                              item.product._id,
                                              1
                                            )
                                          }
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-4"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M12 4.5v15m7.5-7.5h-15"
                                            />
                                          </svg>
                                        </button>
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          disabled={loading}
                                          onClick={() =>
                                            removeFromCart(item._id)
                                          }
                                          className="font-medium text-primary hover:text-secondary"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$ {calculateTotal()}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <Link
                          href="/checkout"
                          className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary"
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          <button
                            type="button"
                            className="font-medium text-primary hover:text-secondary"
                            onClick={() => setShowMiniCart(false)}
                          >
                            Continue Shopping
                            <span
                              aria-hidden="true"
                              className="font-bold text-lg"
                            >
                              {" "}
                              &rarr;
                            </span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
