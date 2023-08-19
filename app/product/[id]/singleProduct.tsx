"use client";
import Button from "@/components/core/button";
import { Product } from "@/page";
import { useCart } from "@/store/cart";
import Image from "next/image";
import { useState } from "react";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(0);
  const addCart = useCart((state) => state.addCart);
  return (
    <>
      <div className="container flex justify-between py-12">
        <div className="w-80 border border-solid border-gray-600 p-5 rounded-lg">
          <Image
            src={product.image}
            alt="Product"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 py-3 px-10">
          <h4 className="font-medium text-dark_primary text-2xl">
            {product?.title}
          </h4>
          <p className="text-xs text-[#959EAD]">{product.category}</p>
          <div className="flex items-center gap-1 mt-4 mb-4">
            {Array(Math.floor(product?.rating?.rate))
              .fill("")
              .map((_, i) => (
                <AiFillStar size={16} className="fill-yellow-400" key={i} />
              ))}
          </div>
          <div className="flex items-center gap-4 py-2 px-3 border-[1px] border-dark_primary rounded select-none inline-flex">
            <button
              disabled={quantity < 1}
              className="disabled:opacity-20"
              onClick={() => {
                if (quantity > 0) {
                  setQuantity((prev) => prev - 1);
                }
              }}
            >
              <AiOutlineMinus size={24} className="cursor-pointer" />
            </button>
            <span className="text-base font-medium">{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)}>
              <AiOutlinePlus size={24} className="cursor-pointer" />
            </button>
          </div>
          <div className="mt-5">
            <Button
              variant="outlined"
              css="justify-between group border-primary bg-primary inline-flex !w-auto text-white"
              fullwidth
              onClick={() => {
                addCart(product, quantity);
              }}
            >
              <p className="group-hover:text-white">Add To Cart</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
