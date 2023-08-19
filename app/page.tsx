import ProductList from "./components/product/ProductList";

type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

const getAllProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const getAllCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Home() {
  const allProducts = await getAllProducts();
  const allCategories = await getAllCategories();
  return (
    <>
      <ProductList products={allProducts} categories={allCategories} />
    </>
  );
}
