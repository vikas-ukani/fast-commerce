import useCart from "@/hooks/useCart";
import { setShowLoginPopup } from "@/store/authSlice";
import { responsiveCarousel } from "@/utils";
import Carousel from "react-multi-carousel";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import CardImage from "./CardImage";

export default function RelatedProducts({ relatedProducts }) {
  const { addToCart } = useCart();
  const dispatch = useDispatch();
  const handleAddToCart = async (product) => {
    if (token) {
      addToCart(product._id, 1);
    } else {
      toast.error("Please login to add item to cart");
      dispatch(setShowLoginPopup(true));
    }
  };
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        Related products
      </h2>
      {/*  */}
      <div className="grid gap-6 w-full">
        <Carousel
          responsive={responsiveCarousel}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          draggable
          ssr
          transitionDuration={500}
          renderButtonGroupOutside={true}
          // customButtonGroup={<ButtonGroup />}
        >
          {relatedProducts.length > 0 &&
            relatedProducts.map((product) => (
              <div
                key={product._id}
                className="mx-3 bg-white shadow rounded overflow-hidden group"
              >
                <div className="relative">
                  <CardImage src={product.images[0]} alt={product.title} />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <a
                      href="#"
                      className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                      title="view product"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                      title="add to wishlist"
                    >
                      <i className="fa-solid fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="pt-4 pb-3 px-4 min-h-40 grid grid-flow-row flex-shrink ">
                  <a href="#" className="">
                    <h4 className="uppercase font-medium text-md mb-2 text-gray-800 hover:text-primary transition">
                      {product.title}
                    </h4>
                  </a>
                  <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">
                      ${product.price}
                    </p>
                    <p className="text-sm text-gray-400 line-through">
                      ${product.price}
                    </p>
                  </div>
                  <div className="flex items-center bottom-0">
                    <ReactStars
                      value={parseFloat(product.rating)}
                      isHalf={true}
                      edit={false}
                      size={24}
                    />
                    <div className="text-xs text-gray-500 ml-3">(150)</div>
                  </div>
                </div>
                <a
                  role="button"
                  className="justify-end block w-full py-2 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </a>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
}
