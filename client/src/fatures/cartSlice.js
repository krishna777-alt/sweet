import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    addQuantity(state, action) {
      const itemId = action.payload?.id ?? action.payload;
      const findItem = state.items.find((item) => item.id === itemId);

      if (findItem) {
        findItem.quantity += 1;
      }
    },
    minusQuantity(state, action) {
      const itemId = action.payload?.id ?? action.payload;
      const findItem = state.items.find((item) => item.id === itemId);

      if (findItem && findItem.quantity > 1) {
        findItem.quantity -= 1;
      }
    },
  },
});

export const { addToCart, addQuantity, minusQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
