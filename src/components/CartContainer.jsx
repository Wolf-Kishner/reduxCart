import React, { useState } from "react";
import { CartItems } from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { Modal } from "./Modal";

export const CartContainer = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  function handleModal() {
    setActive(true);
  }
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is Currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <>
    {active && (
        <Modal  active={active} setActive={setActive} />
    )}
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
        </header>
        <div className="">
          {cartItems.map((item) => {
            return <CartItems key={item.id} {...item} />;
          })}
        </div>
        <footer>
          <hr></hr>
          <div className="cart-total">
            <h4>
              Total <span>${total.toFixed(2)}</span>
            </h4>
          </div>
          <button onClick={ () => handleModal() } className="bg-red-600 rounded-4xl text-white px-4 py-1 hover:bg-red-500">
            Clear Cart
          </button>
        </footer>
      </section>
    </>
  );
};
