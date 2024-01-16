const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    item: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    }

})

export const { } = cartSlice.actions
export default cartSlice.reducer