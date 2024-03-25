import React from "react";
import { clearCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
export const Modal = ({ active, setActive }) => {
  const dispatch = useDispatch();
  return (
    <>
      <aside className="modal-container">
        <div className="modal">
          <h4>Remove all items from Cart ? </h4>
          <div className="flex justify-center gap-4 mt-4 ">
            <div className="btn-container">
              <button
                onClick={() => dispatch(clearCart())}
                type="button"
                className=" btn btn-confirm "
              >
                Confirm
              </button>
            </div>
            <div onClick={() => setActive(false)} className="btn-container">
              <button className="btn clear-btn ">Cancel</button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
