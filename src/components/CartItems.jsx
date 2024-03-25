import React from "react";
import { ChevronDown, ChevronUp, MinusIcon, PlusIcon } from "../icons";
//Importing all the Actions that are Concnernd with Cart
import {
  removeItem,
  increment,
  decrement,
  calulateTotals,
} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export const CartItems = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div className="">
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          onClick={() => dispatch(removeItem(id))}
          className="bg-red-400 hover:bg-red-700  text-white px-2 rounded-5xl"
        >
          Remove
        </button>
      </div>
      <div className="flex-col px-2 py-2 text-center">
        <button onClick={() => dispatch(increment({ id }))}>
          <ChevronUp />
        </button>
        <div>{amount}</div>
        <button
          onClick={() => {
            if (amount == 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrement({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
