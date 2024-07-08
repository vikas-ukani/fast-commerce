"use client";

import { useCart, useWishlist } from "@/hooks";
import Image from "next/image";
import ReactStars from 'react-rating-star-with-type';
import { IWishlist } from "../../../../types";

function WishlistPage() {
  const { wishlists, refetchWishlist, addWishlist, removeWishlist } =
    useWishlist();
  const { addToCart } = useCart()

  return (
    <div className="col-span-9 space-y-4">
      {wishlists?.length == 0
        ? <div className="min-h-96 border-2 shadow-lg rounded-lg text-primary text-2xl font-bold flex flex-col gap-4 justify-center items-center ">
          <i className="text-5xl fa-regular fa-heart"></i>
          <span>No Wishlists found.</span>
        </div>
        : wishlists?.map(({ id, product }: IWishlist, key: number) => {
          if (product === null) return null
          return (
            <div key={id} className="flex items-center justify-between border shadow gap-4 p-4 border-gray-200 rounded">
              <div className="w-1/6">
                <Image
                  height={1000}
                  width={1000}
                  src={product.images[0]}
                  alt="product 6"
                  className="object-contain aspect-square justify-center"
                />
              </div>
              <div className="w-3/6 h-full grid grid-flow-row gap-y-2 flex-row justify-start">
                <p className="text-gray-800 text-lg font-bold">
                  {product.title}
                </p>

                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-500">
                    <ReactStars
                      value={product.rating}
                      isHalf={true}
                      size={15}
                      activeColor=""
                    />
                  </div>
                </div>

                <small className="text-sm text-gray-600">{product.description}</small>
                <p className="text-gray-700 text-sm mt-2">
                  Availability:
                  {product?.stock > 0
                    ? <span className="text-green-600 pl-1 font-bold border-2 rounded shadow p-0.5  px-2 ml-2 mt-2 text-center w-full border-green-500">In Stock</span>
                    : <span className="text-red-600 pl-1 font-bold border-2 rounded shadow p-0.5  px-2 ml-2 mt-2 text-center w-full border-red-500">Out of Stock</span>}
                </p>
              </div>
              <div className=" text-primary text-lg font-semibold">${product.price || '-'}</div>
              <button
                onClick={() => addToCart(product.id)}
                className="w-1/6 px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase "
              >
                Add to cart
              </button>

              <button className=" text-gray-600 cursor-pointer hover:text-primary" onClick={() => removeWishlist(id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          )
        })}
    </div>
  );
}

export default WishlistPage;
