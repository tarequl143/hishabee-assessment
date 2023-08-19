import { Product } from "@/page";
import toast from "react-hot-toast";
import { create } from "zustand";

export type CartProductItem = Product & {
  quantity: number;
};

interface InitialCartState {
  cartItems: CartProductItem[];
  open: boolean;
  toggle: () => void;
  addCart: (product: Product, quantity?: number) => void;
  reduceCartItemCount: (productId: number) => void;
  removeFromCart: (productId: number) => void;
}

export const useCart = create<InitialCartState>((set) => ({
  cartItems: [],
  open: false,
  toggle: () => set((state) => ({ open: !state.open })),
  addCart: (product, quantity = 1) => {
    set((state) => {
      const isProductInCart = state.cartItems.find(
        (item) => item.id === product.id,
      );
      if (isProductInCart) {
        return {
          cartItems: state.cartItems.map((item) => {
            if (item.id === product.id) {
              return { ...item, quantity: item.quantity + quantity };
            }
            return item;
          }),
        };
      }
      return {
        cartItems: [...state.cartItems, { ...product, quantity: quantity }],
      };
    });
    toast.success("Product added to cart");
  },
  reduceCartItemCount: (productId) =>
    set((state) => {
      return {
        cartItems: state.cartItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
    }),

  removeFromCart: (productId) => {
    set((state) => {
      return {
        cartItems: state.cartItems.filter((item) => item.id !== productId),
      };
    });
    toast.success("Product removed from cart");
  },
}));
