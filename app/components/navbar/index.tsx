"use client";
import Logo from "@/assets/logo.svg";
import { useCart } from "@/store/cart";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import CartDrawer from "../cartDrawer";
import Badge from "../core/badge";
import TextField from "../core/textfield";

const links = [
  { label: "Products", link: "#" },
  { label: "About", link: "#" },
  { label: "Discount", link: "#" },
  { label: "Reviews", link: "#" },
  { label: "Contact Now", link: "#" },
  { label: "Order tracking", link: "#" },
  { label: "Help", link: "#" },
];

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src={Logo} alt="logo" />
      <h4 className="logo-text">
        <span>Shop</span>Now
      </h4>
    </div>
  );
};

export const Header = () => {
  const cartItems = useCart((state) => state.cartItems);
  const toggleCart = useCart((state) => state.toggle);
  return (
    <div className="flex items-center gap-6 py-4">
      <TextField
        variant="outlined"
        type="text"
        fullwidth
        placeHolder="Search something"
        css="bg-[#F9FAFB] border-[#E9E9E9] focus:border-primary"
      >
        <FiSearch size={20} />
      </TextField>
      <div className="flex items-center gap-4">
        <Badge count={cartItems.length} name="cart-count" onClick={toggleCart}>
          <BiShoppingBag size={20} />
        </Badge>
        <Badge>
          <AiOutlineUser size={20} />
        </Badge>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <CartDrawer />
      <div className="sticky top-0 z-50 bg-white shadow">
        <div className="container">
          <div className="py-4 flex flex-col md:flex-row items-center justify-between border-b-[1px] border-[#E9E9E9]">
            <div>
              <div className="flex items-center gap-12">
                <BrandLogo />
                <div className="flex items-center gap-4">
                  {links.slice(0, 5).map((link) => (
                    <p className="nav-link" key={link.label}>
                      {link.label}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {links.slice(5).map((link) => (
                <p className="nav-link" key={link.label}>
                  {link.label}
                </p>
              ))}
            </div>
          </div>

          <div>
            <Header />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
