import useCart from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MiniCart from "./Cart/MiniCart";
import useAuth from "@/hooks/useAuth";

export default function Header() {
  const { token } = useAuth();
  const { cartItems, getCartItems } = useCart();
  const [showMiniCart, setShowMiniCart] = useState(false);

  useEffect(() => {
    let interval = null;
    if (token && cartItems.length === 0) {
      interval = setInterval(async () => {
        await getCartItems();
      }, 20000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [cartItems, token, getCartItems]);

  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <div className="block md:hidden">
          <i className="fa-solid fa-bars"></i>
        </div>
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            className="w-32 h-8"
            height={500}
            width={500}
          />
        </Link>

        <div className="w-full max-w-xl  flex">
          <div className="w-full relative flex">
            <span className="absolute right-4 top-3 text-lg text-gray-400">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              name="search-string-1"
              id="search-product-1"
              autoComplete="off"
              className="w-full border border-primary border-r-0 pl-12 py-3 !pr-10 rounded-l-md focus:outline-none hidden md:flex"
              placeholder="search"
            />
          </div>

          <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex items-center">
            Search
          </button>
        </div>

        <div className="flex items-center gap-2 space-x-4">
          <a
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="text-xs leading-3">Wishlist</div>
            <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              8
            </div>
          </a>
          <Link
            href="/carts"
            onClick={(e) => {
              e.preventDefault();
              cartItems.length && setShowMiniCart(true);
            }}
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
            <div className="text-xs leading-3">Cart</div>
            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              {cartItems.length}
            </div>
          </Link>
          <MiniCart
            showMiniCart={showMiniCart}
            setShowMiniCart={setShowMiniCart}
          />
          <Link
            href="/account"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="text-xs leading-3">Account</div>
          </Link>
        </div>
      </div>
    </header>
  );
}
