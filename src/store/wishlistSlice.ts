import { createSlice } from "@reduxjs/toolkit";
import { IWishlist } from './../types/index.d';


const initialState: { wishlists: IWishlist[] } = {
    wishlists: []
}
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        setWishlists: (state: { wishlists: IWishlist[] }, { payload }: { payload: IWishlist[] }) => {
            state.wishlists = payload
        }
    }
})

export const { setWishlists } = wishlistSlice.actions
export default wishlistSlice.reducer;