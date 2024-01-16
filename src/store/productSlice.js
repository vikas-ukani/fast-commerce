const { createSlice } = require("@reduxjs/toolkit");

export const initialState = {
    products: [],
    filter: {
        categories: [],
        brands: [],
        min_price: 0,
        max_price: 100000,
        sizes: [],
        colors: [],
        sort_by: "title",
        descending: false,
        page: 1,
        limit: 10,
    }
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductFilter: (state, { payload }) => {
            console.log('payload :>> ', payload);
            state.filter = payload
        },
        setProducts: (state, { payload }) => {
            state.products = payload
        }
    }
})

export const { setProductFilter, setProducts } = productSlice.actions
export default productSlice.reducer