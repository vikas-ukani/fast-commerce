import { responsiveCarousel } from "@/utils";
import Image from "next/image";
import Carousel from "react-multi-carousel";

export default function ProductImageSection({
  images,
  currentImage,
  setCurrentImage,
}) {
  return (
    <div>
      <Image
        src={currentImage}
        alt="product"
        className="w-full h-[500px] sm:h-[300]"
        width={500}
        height={600}
      />
      <div className="grid duration-500 transition ease-in-out gap-4 mt-8">
        <Carousel
          responsive={responsiveCarousel}
          draggable={false}
          infinite
          transitionDuration={500}
        >
          {images.map((image) => (
            <Image
              src={image}
              key={image}
              alt={image}
              className={`${
                image == currentImage ? "border-primary" : ""
              } w-full h-24 p-1 cursor-pointer border-2 hover:shadow-lg rounded`}
              width={500}
              height={500}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
