const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
    removeCartItems: (state, action) => {
      state.items = state.item.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setCartItems, removeCartItems } = cartSlice.actions;
export default cartSlice.reducer;
