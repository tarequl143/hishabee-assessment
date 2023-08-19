"use client";

import { Product } from "@/page";
import { useFilter } from "@/store/filter";
import { useMemo } from "react";
import { BsSortAlphaDown, BsSortAlphaDownAlt } from "react-icons/bs";
import ProductCard from "./productCard";

const ProductList = ({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) => {
  const selectedSortvalue = useFilter((state) => state.sortValue);
  const selectedCategory = useFilter((state) => state.category);
  const filterByCategory = useFilter((state) => state.filterByCategory);
  const sort = useFilter((state) => state.sort);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (!selectedCategory) return true;
        return product.category === selectedCategory;
      })
      .sort((a, b) => {
        if (selectedSortvalue === "asc") {
          return a.title.localeCompare(b.title);
        }
        if (selectedSortvalue === "desc") {
          return b.title.localeCompare(a.title);
        }
        return 0;
      });
  }, [products, selectedCategory, selectedSortvalue]);

  return (
    <div className="container flex flex-wrap flex-col  py-12">
      <div className="flex flex-col w-full">
        <h3 className="w-full mb-1">Filter by category:</h3>
        <div className="inline-flex items-center mb-4">
          {categories?.map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => filterByCategory(cat)}
                className={`inline-flex py-1 mr-2 px-3 capitalize items-center justify-center rounded-sm text-gray-800 border border-solid border-gray-600 ${
                  selectedCategory === cat
                    ? "!bg-primary !border-primary !text-white"
                    : ""
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h3 className="w-full mb-1">Sort by:</h3>

        <div className="inline-flex items-center mb-4">
          <button
            onClick={() => sort("asc")}
            className={`inline-flex w-8 h-8 items-center justify-center rounded-sm text-gray-800 border border-solid border-gray-600 ${
              selectedSortvalue === "asc"
                ? "!bg-primary !border-primary !text-white"
                : ""
            }`}
          >
            <BsSortAlphaDown />
          </button>
          <button
            onClick={() => sort("desc")}
            className={`ml-2 inline-flex w-8 h-8 items-center justify-center rounded-sm text-gray-800 border border-solid border-gray-600 ${
              selectedSortvalue === "desc"
                ? "!bg-primary !border-primary !text-white"
                : ""
            }`}
          >
            <BsSortAlphaDownAlt />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts?.map((product, i) => (
          <ProductCard key={product.title + i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
