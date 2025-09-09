import { ShoppingCart } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="h-[72px] place-items-center">
      <div className="container flex justify-between place-items-center px-[10px]">
        <div className="flex place-items-center gap-[50px]">
          <div className="text-1xl text-2xl">ToyStore</div>
          <ul className="flex gap-[18px] place-items-center w-[100%] h-[100%]">
            <li>Catalog</li>
            <li>Delivery</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="flex place-items-center gap-[15px]">
          <p>Cart</p>
          <ShoppingCart />
          <button className="rounded-full bg-[#A5C926] text-center w-[20px] h-[20px]">
            0
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
