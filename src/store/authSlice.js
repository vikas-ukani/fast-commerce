const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: {},
  showLoginPopup: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (store, { payload }) => {
      store.token = payload;
    },
    setShowLoginPopup: (store, { payload }) => {
      store.showLoginPopup = payload;
    },
  },
});

export const { setToken, setShowLoginPopup } = authSlice.actions;

export default authSlice.reducer;
