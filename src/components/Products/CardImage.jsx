import Image from "next/image";

export default function CardImage({
  src,
  alt = "default image",
  className = null,
  ...rest
}) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`${className ? className : "h-72 w-100 object-contain"}`}
      loading="lazy"
      height={300}
      width={300}
      {...rest}
    />
  );
}
