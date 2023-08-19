import { Product } from "@/page";
import { SingleProduct } from "./singleProduct";

const getSingleProduct = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product: Product = await getSingleProduct(params.id);
  return (
    <>
      <SingleProduct product={product} />
    </>
  );
}
