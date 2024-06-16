import Image from "next/image";

export default function CardImage({ src, alt = "default image", ...rest }) {
  return (
    <Image
      src={src}
      alt={alt}
      className="h-72 w-100 object-contain"
      loading="lazy"
      height={300}
      width={300}
      {...rest}
    />
  );
}
