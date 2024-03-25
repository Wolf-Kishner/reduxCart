import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: false,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console, log(err));
});
//Immer Library
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      //State Muation
      state.cartItems = [];
      //Returning New State So the new State only has this
      //return {cartItems: []}
    },
    removeItem: (state, action) => {
      console.log(action);
      const itemId = action.payload;
      console.log(itemId);
      //While Updating you NEED TO UPDATE USING THE STATE ITLSEF ! !
      state.cartItems = state.cartItems.filter((itr) => {
        return itr.id !== itemId;
      });
    },
    increment: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrement: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calulateTotals: (state, action) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    extraReducers: {
      [getCartItems.pending]: (state) => {
        state.isLoading = true;
      },
      [getCartItems.fulfilled]: (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      },
      [getCartItems.rejected]: (state) => {
        state.isLoading = false;
      },
    },
  },
});
export const { clearCart, removeItem, increment, decrement, calulateTotals } =
  cartSlice.actions;
//console.log(cartSlice)
export default cartSlice.reducer;
