import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

import React from "react";

export const Navbar = () => {
   const {amount} = useSelector((store) => store.cart);
  return (
    <>
      <div className="p-4 flex justify-center gap-2  w-full bg-gray-200">
        <h2 className="font-semibold">Redux Tutorial </h2>
        <div className="flex">
          <CartIcon />
          <div className="bg-gray-400  text-white rounded-2xl h-6 w-6 text-center">
            {amount}
          </div>
        </div>
      </div>
    </>
  );
};
