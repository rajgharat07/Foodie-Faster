import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    addItemByOne: (state, action) => {
      const item = state.items[action.payload.id];
      console.log(item);
      const quantity =
        item && item.hasOwnProperty("quantity")
          ? state.items[action.payload.id]?.quantity + 1
          : 1;
      state.items[action.payload.id] = { ...action.payload, quantity };
      state.totalItemsCount += 1;
    },
    removeItem: (state, action) => {
      const item = state.items[action.payload];
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalItemsCount--;
      } else {
        state.totalItemsCount--;
        delete state.items[action.payload];
      }
    },
    clearCart: (state) => {
      state.items.length = 0; // []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
