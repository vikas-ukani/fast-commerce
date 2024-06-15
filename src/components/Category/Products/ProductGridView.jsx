import { useSelector } from "react-redux";
import GridItem from "./GridItem";

export default function ProductGridView() {
  const { products } = useSelector((state) => state.product);

  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-8 duration-300">
      {products.length > 0 &&
        products?.map((product, idx) => (
          <GridItem key={product._id} product={product} />
        ))}
    </div>
  );
}
