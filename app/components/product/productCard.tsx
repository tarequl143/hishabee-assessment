"use client";

import { Product } from "@/page";
import { useCart } from "@/store/cart";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import Button from "./../core/button";

const ProductCard = ({ product }: { product: Product }) => {
  const addCart = useCart((state) => state.addCart);
  return (
    <div className="p-5 rounded border-[1px] border-[#F1F1F1]">
      <div className="flex items-center justify-between"></div>
      <Link href={`/product/${product.id}`}>
        <div className="mt-8 h-40 flex items-center">
          <Image
            src={product.image}
            alt="Product"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>
      </Link>

      <div className="mt-8">
        <p className="text-xs text-[#959EAD]">{product.category}</p>
        <h4 className="text-base font-medium text-dark_primary my-1">
          {product?.title.slice(0, 20)}...
        </h4>
        <div className="flex items-center gap-1">
          {Array(Math.floor(product?.rating?.rate))
            .fill("")
            .map((_, i) => (
              <AiFillStar size={16} className="fill-yellow-400" key={i} />
            ))}
        </div>
        <div className="mt-5">
          <Button
            variant="outlined"
            css="justify-between group hover:bg-primary hover:border-primary"
            fullwidth
            onClick={() => {
              addCart(product);
            }}
          >
            <p className="group-hover:text-white">Add To Cart</p>
            <p className="group-hover:text-white">${product?.price}</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
