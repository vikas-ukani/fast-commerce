import useCart from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";

export default function ProductListView() {
  const { products } = useSelector((state: IRootState) => state.product);
  const { addToCart } = useCart();

  const handleAddToCart = async (product) => {
    await addToCart(product.id, 1);
  };

  return (
    <div className="space-y-6 ">
      {products.length > 0 &&
        products?.map((product, idx) => (
          <div
            key={idx}
            className="flex min-h-80 font-sans w-full bg-gray-100 shadow-md rounded-xl hover:shadow-lg hover:scale-100 border hover:border-primary duration-300"
          >
            <div className="flex-none w-80 relative">
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-center rounded-l-xl"
                  loading="lazy"
                  height={1000}
                  width={1000}
                />
              </Link>
            </div>
            <div className="flex-auto p-6 ">
              <div className="flex flex-wrap items-center">
                <h1 className="flex-auto text-primary text-2xl font-semibold text-slate-900 capitalize">
                  <Link href={`/products/${product.id}`}>{product.title}</Link>
                </h1>
                <div className="text-lg font-semibold text-slate-500">
                  <p className="text-xl text-primary font-semibold">
                    ${product.price}
                  </p>
                  <p className="text-sm text-gray-400 line-through">
                    ${product.price}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-primary">
                  <ReactStars
                    value={parseFloat(product.rating)}
                    isHalf={true}
                    edit={false}
                    size={24}
                  />
                </div>
                <div className="text-base font-semibold text-gray-500 ml-3">
                  {product.rating}
                </div>
              </div>
              <div className="space-y-2 mt-4 text-sm">
                <p className="text-gray-800 font-semibold space-x-2">
                  <span>Availability: </span>
                  <span className="text-green-600">In Stock</span>
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">Brand: </span>
                  <span className="text-gray-600">{product.brand}</span>
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">
                    Category:{" "}
                  </span>
                  <span className="text-gray-600">{product.category}</span>
                </p>
              </div>
              <div className="w-full flex-none text-sm font-medium text-slate-700 my-2">
                {product.description}
              </div>

              <div className="flex space-x-4 mt-6 text-sm font-medium ">
                <div className="flex-auto flex space-x-4">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="h-10 px-6 font-semibold rounded-md border border-secondary text-black capitalize"
                    type="button"
                  >
                    Add to cart
                  </button>
                  <button
                    href="#"
                    className="block px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition capitalize"
                  >
                    Buy now
                  </button>
                </div>
                <button
                  className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-primary border border-primary"
                  type="button"
                  aria-label="Like"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-slate-700 mt-1">
                Free shipping on all continental. Shop now
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
