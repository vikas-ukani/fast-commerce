import { IRootState } from "@/store";
import { useSelector } from "react-redux";
import { IProduct } from "../../../types";
import GridItem from "./GridItem";

export default function ProductGridView() {
  const { products }: { products: IProduct[] } = useSelector((state: IRootState) => state.product);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl::grid-cols-3 gap-8 duration-300">
      {products.length > 0 &&
        products?.map((product: IProduct) => (
          <GridItem key={product.id} product={product} />
        ))}
    </div>
  );
}
