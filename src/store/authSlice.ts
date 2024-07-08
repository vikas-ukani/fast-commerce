import Cookies from 'js-cookie';
import { IUser } from "../types";

const { createSlice } = require("@reduxjs/toolkit");

interface IInitialState {
  user: IUser;
  showLoginPopup: boolean;
  token: string | null;
}

const initialState: IInitialState = {
  user: {
    id: "",
    name: "",
    email: "",
    photo: "",
    created_at: "",
    updated_at: "",
  },
  showLoginPopup: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (store: { token: string }, { payload }: { payload: string }) => {
      Cookies.set('token', payload)
      store.token = payload;
    },
    setShowLoginPopup: (store: { showLoginPopup: boolean }, { payload }: { payload: boolean }) => {
      store.showLoginPopup = payload;
    },
    setUser: (store: { user: IUser }, { payload }: { payload: IUser }) => {
      store.user = payload;
    },
  },
});

export const { setToken, setUser, setShowLoginPopup } = authSlice.actions;

export default authSlice.reducer;
